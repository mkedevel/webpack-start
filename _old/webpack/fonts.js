module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './assets/fonts',
						publicPath: '/assets/fonts/'
					}
				}
			]
		}
	};
};
