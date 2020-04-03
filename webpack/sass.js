const autoprefixer = require('autoprefixer');

module.exports = () => {
	return {
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
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
