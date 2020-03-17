const merge = require('webpack-merge');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel = require('./webpack/babel');

module.exports = merge(
	{
		entry: {
			app: './src/index.js'
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'Production'
			})
		],
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		}
	},
	babel()
);
