const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');

const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/uglify');

const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const babel = require('./webpack/babel');
const json = require('./webpack/json-loader');

const PATHS = {
	sourсe: path.join(__dirname, 'dev'),
	build: path.join(__dirname, 'build')
};

const common = function (env) {
	return merge([
		{
			mode: (env === 'production') ? 'production' : 'development',
			devtool: (env === 'production') ? 'source-map' : 'eval',

			entry: {
				index: PATHS.sourсe + '/app.js',
			},

			output: {
				path: PATHS.build,
				filename: './assets/js/[name].js'
			},

			plugins: [
				new HtmlWebpackPlugin({
					filename: 'index.html',
					chunks: ['index', 'common'],
					template: PATHS.sourсe + '/templates/index/index.pug'
				}),

				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery'
				})
			],

			optimization: {
				splitChunks: {
					cacheGroups: {
						commons: {
							test: /[\\/]node_modules[\\/]/,
							name: 'common',
							chunks: 'all'
						}
					}
				}
			}
		},

		pug(),
		images(),
		fonts(),
		babel(),
		json()
	]);
};

module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common(env),
			extractCSS(),
			uglifyJS() // минификация и оптимизация
		]);
	}

	if (env === 'developer') {
		return merge([
			common(env),
			devServer(),
			sass(env),
			css()
		]);
	}
};
