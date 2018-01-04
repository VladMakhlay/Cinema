const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
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
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                },
                {
                    loader: 'img-loader'
                }

            ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader'
                },
                {
                    loader: 'eslint-loader'
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

const developmentConfig = {
    devServer: {
        contentBase: './public',
        stats: 'errors-only',
    }
};

module.exports = function(env) {
    if(env === 'production') {
        return common;
    }
    if(env === 'development') {
        return merge([
            common,
            developmentConfig
        ]);
    }
};