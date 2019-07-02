//客户端代码打包 development
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LessPluginFunctions = require('less-plugin-functions');

const  config = webpackMerge(baseConfig, {
    mode: 'development',
    output: {
        publicPath: "/",
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        libraryTarget: 'var'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        // host: '172.20.10.2',
        progress: true,
        inline: true,
        port: 3000,
        compress: true,
        historyApiFallback: true
    },
    entry: {
        client: [path.resolve(__dirname, "../client/build/devClient.js")]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader:"less-loader",
                        options: {
                            plugins: [
                                new LessPluginFunctions()
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..'),
        }),
        new HtmlWebpackPlugin({
            template: "./client/index.html",
            inject: true,
            favicon: './client/static/image/logo.jpg',
            filename: "index.html",
            hash: true
            // loading: loading
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development')
            },
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});

module.exports = config;
