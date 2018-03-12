module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.json$/,
					loader: 'json-loader',
					options: {
						name: './data/[name].[ext]'
					},
				}
			]
		}
	}
}