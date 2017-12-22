const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
  plugins: [
    new CleanWebpackPlugin(['../public']),
    new HtmlWebpackPlugin({
      title: 'Cinema'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public')
  }
};