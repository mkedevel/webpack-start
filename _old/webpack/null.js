module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|jpeg|png|gif|svg|css|scss)$/,
					loader: 'null-loader'
				}
			]
		}
	}
};

