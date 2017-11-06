const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	sourсe: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: {
		'index': PATHS.sourсe + '/pages/index/index.js',
		'example': PATHS.sourсe + '/pages/example/example.js',
	},

	output: {
		path: PATHS.build,
		filename: './js/[name].js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			chunks: ['index'],
			template: PATHS.sourсe + '/pages/index/index.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'example.html',
			chunks: ['example'],
			template: PATHS.sourсe + '/pages/example/example.pug',
		})
	],

	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		]
	}
};