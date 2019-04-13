const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './lib/index.js'
  ],
  mode: 'production',
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'index.js',
/*     publicPath: '/', */
  },
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
          { loader: 'postcss-loader', options: {
            config: {
              path: path.join(process.cwd(), 'postcss.config.js')
            }
          } },
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
              name: '[path][name].[ext]',
              outputPath: 'images/',
              emitFile: false,
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '..', 'views', 'index.ejs'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
			filename: 'css/main.css'
		}),
  ],
};

