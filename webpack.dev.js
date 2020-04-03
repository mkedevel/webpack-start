const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const devServer = require('./webpack/devserver');
const sass = require('./webpack/sass');

module.exports = merge(
	common,
	{
		mode: 'development',
		devtool: 'inline-source-map'
	},
	devServer(),
	sass()
);
