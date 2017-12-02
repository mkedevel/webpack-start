const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const babel = require('./webpack/babel');

const PATHS = {
	sourсe: path.join(__dirname, 'dev'),
	build: path.join(__dirname, 'dist')
};

const common = merge([
	
	{
		entry: {
			'index': PATHS.sourсe + '/app.js',
			'example': PATHS.sourсe + '/js/example.js'
		},

		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},

		plugins: [

			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.sourсe + '/pages/index/index.pug',
			}),

			new HtmlWebpackPlugin({
				filename: 'example.html',
				chunks: ['example', 'common'],
				template: PATHS.sourсe + '/pages/example/example.pug',
			}),

			new webpack.optimize.CommonsChunkPlugin({
				name: 'common',
			}),

			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),

		],
	},

	pug(),
	images(),
	fonts(),
	babel(),

]);

module.exports = function(env) {

	if (env == 'production') {
		return merge([
			common,
			extractCSS(),
			//uglifyJS(), // minify JS
		]);
	}

	if (env == 'development') {
		return merge([
			common,
			devServer(),
			sass(),
			css()
		]);
	}

}