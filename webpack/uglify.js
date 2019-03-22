const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function () {
	return {
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					sourceMap: true,
					parallel: true,
					uglifyOptions: {
						compress: {
							warnings: false
						}
					}
				}),

				new OptimizeCSSAssetsPlugin({})
			]
		}
	};
};
