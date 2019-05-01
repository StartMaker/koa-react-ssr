const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const LessPluginFunctions = require('less-plugin-functions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//预渲染
const PreRender = require('prerender-spa-plugin');

const config = webpackMerge(baseConfig, {
    mode: 'production',
    output: {
        publicPath: "/static/",
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name]-[contentHash].js',
        libraryTarget: 'var',
        library: 'MyClient'
    },
    entry: {
        client: path.resolve(__dirname, "/client/index.js")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            exec: true,
                            plugins: [
                                require('precss'),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 0.01%"
                                    ]
                                })
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            exec: true,
                            plugins: [
                                require('precss'),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 0.01%"
                                    ]
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            exec: true,
                            plugins: [
                                require('precss'),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 0.01%"
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader:"less-loader",
                        options: {
                            plugins: [
                                new LessPluginFunctions()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        // 压缩js
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: true,
                    ecma: 8
                }
            })
        ],
        // 抽离公用的js部分 , 配置自动提取node_modules里用到的模块如jquery
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /\.js$/,
                    chunks: "all", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
                    enforce: true
                },
            }
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({ // 在plugins中配置属性
            filename: 'css/[name]-[contentHash].css', // 配置提取出来的css名称
            chunkFilename: "css/chunk-[id].css"
        }),
        // new PreRender({
        //     staticDir: path.join(__dirname,'dist'),
        //     routes: ['/']
        // })
    ]
});

module.exports = config;
