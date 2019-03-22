const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader',
							options: {plugins: [autoprefixer]}
						},
						{
							loader: 'sass-loader'
						}
					]
				}
			]
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: './assets/css/[name].[hash].css',
				chunkFilename: './assets/css/[id].[hash].css'
			})
		]
	};
};
