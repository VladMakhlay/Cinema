const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './public',
    hot: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CleanWebpackPlugin(['./public']),
    new HtmlWebpackPlugin({
      title: 'Cinema'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};