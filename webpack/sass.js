const autoprefixer = require('autoprefixer');

module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.(sa|sc)ss$/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {plugins: [autoprefixer]}
						},
						'sass-loader'
					]
				}
			]
		}
	};
};
