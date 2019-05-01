const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const LessPluginFunctions = require('less-plugin-functions');

const  config = webpackMerge(baseConfig, {
    mode: 'development',
    output: {
        publicPath: "/",
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        libraryTarget: 'var',
        library: 'MyClient'
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     hot: true,
    //     // host: '10.20.0.72',
    //     progress: true,
    //     inline: true,
    //     port: 3000,
    //     compress: true
    // },
    entry: {
        client: [path.resolve(__dirname, "../client/index.js")]
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
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});

module.exports = config;
