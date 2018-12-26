const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join, resolve } = require('path');

module.exports = {
    mode: 'development',
	entry: join(__dirname, 'src', 'index'),
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js?t=' + new Date().getTime(),
		path: join(__dirname, 'docs'),
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
            chunks: "all"
        }
	},
	target: 'web',
	module: {
		rules: [
            {
                test: /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
			{
				test: /\.css$|sass$|\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
					},
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-inline-loader',
						options: {
							limit: 10 * 1024,
							noquotes: true
						}
					},
					{
						loader: 'url-loader',
						options: {
							limit: 10 * 1024
						}
					},
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
        new ManifestPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['*', '.js', '.json', '.css', '.scss'],
    },
    devServer: {
        hot: true,
        port: 5000,
        contentBase: '/docs/',
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
	},
};
