const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = true;
const isHmr = process.env.NODE_ENV === "hmr";

module.exports = [{
  devtool: "inline-source-map",
  entry: {
    main: "./lib/index.js"
  },
  mode: "production",
  output: {
    path: path.join(__dirname, "..", "public"),
    filename: "js/[name].bundle.[hash].js",
    chunkFilename: "chunks/[name].chunk.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                    /* your options here */
                }
            }
        ]
    },
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$|sass$|\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isHmr,
              reloadAll: isHmr
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: isDev,
              plugins: function() {
                return [
                  require("precss")(),
                  require("autoprefixer")(),
                  require("postcss-preset-env")()
                ];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-inline-loader",
            options: {
              limit: 10 * 1024,
              noquotes: true
            }
          },
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024
            }
          },
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "images/",
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "..", "views", "index.ejs"),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.[hash].css",
      chunkFilename: "chunks/[id].chunk.[hash].css"
    })
  ]
}, {
  entry: {
    global: './lib/global.scss',
  },
  output: {
    path: path.join(__dirname, "..", "public"),
    filename: "js/[name].bundle.[hash].js",
    chunkFilename: "chunks/[name].chunk.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isHmr,
              reloadAll: isHmr
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: isDev,
              plugins: function() {
                return [
                  require("precss")(),
                  require("autoprefixer")(),
                  require("postcss-preset-env")()
                ];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/global.css",
      chunkFilename: "chunks/[id].chunk.[hash].css"
    })
  ]
}];
