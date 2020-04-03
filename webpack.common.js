const merge = require('webpack-merge');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babel = require('./webpack/babel');

module.exports = merge(
	{
		entry: {
			app: './src/index.js'
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'Webpack Build with React 16.13.0'
			}),
			new MiniCssExtractPlugin({
				filename: './assets/[name].css',
				chunkFilename: './assets/[id].css'
			})
		],
		output: {
			filename: 'assets/[name].js',
			path: path.resolve(__dirname, 'dist')
		}
	},
	babel()
);
