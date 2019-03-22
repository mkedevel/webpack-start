module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.json$/,
					type: 'javascript/auto',
					loader: 'json-loader',
					options: {
						name: './data/[name].[ext]'
					}
				}
			]
		}
	};
};
