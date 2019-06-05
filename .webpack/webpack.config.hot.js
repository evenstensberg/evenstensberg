const merge = require('webpack-merge');
const devConfig = require('./webpack.config.dev');

module.exports = merge(devConfig, {
    devServer: {
		hot: true,
		contentBase: '/public/',
        disableHostCheck: true,
        port: 8090,
		headers: {'Access-Control-Allow-Origin': '*'}
	},
})