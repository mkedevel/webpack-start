const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/uglify');

module.exports = merge(
	common,
	{
		mode: 'production'
	},
	extractCSS(),
	uglifyJS()
);
