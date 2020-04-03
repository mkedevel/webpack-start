const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const css = require('./webpack/css');

module.exports = merge(
	common,
	{
		mode: 'production'
	},
	css()
);
