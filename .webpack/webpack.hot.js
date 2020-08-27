const merge = require('webpack-merge');
const devConfig = require('./webpack.client.dev');

module.exports = merge(devConfig, {
    devServer: {
		hot: true,
		contentBase: '/public/',
        disableHostCheck: true,
        port: 8090,
		headers: {'Access-Control-Allow-Origin': '*'}
	},
	plugins: [
	/* 	new NetworkPlugin() */
	]
})