const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const common = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            }),
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[hash:10].[ext]',
                        outputPath: 'images/',
                    },
                },
                {
                    loader: 'img-loader',
                },

            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[hash:10].[ext]',
                        outputPath: 'fonts/',
                    },
                },
            ],
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react'],
                    },
                },
                {
                    loader: 'eslint-loader',
                },
            ],
        },
        ],
    },
    plugins: [
        new ExtractTextPlugin('[name].[hash:5].css'),
        new CleanWebpackPlugin(['./public']),
        new HtmlWebpackPlugin({
            title: 'Cinema',
        }),

    ],
};

const productionConfig = {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
    ],
};

const developmentConfig = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        stats: 'errors-only',
    },
};

module.exports = (env) => {
    if (env === 'production') {
        return merge([
            common,
            productionConfig,
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            developmentConfig,
        ]);
    }
};
