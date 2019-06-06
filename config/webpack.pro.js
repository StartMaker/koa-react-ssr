//客户端代码打包 production
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const LessPluginFunctions = require('less-plugin-functions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
//预渲染
// const PreRender = require('prerender-spa-plugin');

const config = webpackMerge(baseConfig, {
    mode: 'production',
    target: 'node',
    output: {
        publicPath: "./",
        path: path.join(__dirname, '../dist/static'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        // library: 'MyClient'
    },
    entry: {
        client: path.resolve(__dirname, "../client/build/buildSSR.js")
    },
    externals: [
        nodeExternals({
            whitelist: /\.less$/,
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    require.resolve('css-hot-loader'),
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            exec: true,
                            plugins: [
                                require('precss'),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 0.01%"
                                    ],
                                    flexbox: 'no-2009',
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    require.resolve('css-hot-loader'),
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // exec: true,
                            plugins: [
                                require('precss'),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 0.01%"
                                    ],
                                    flexbox: 'no-2009',
                                })
                            ]
                        }
                    },
                    {
                        loader: require.resolve('sass-loader')
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // require.resolve('css-hot-loader'),
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            //不能加exec，会报错
                            // exec: true,
                            plugins: [
                                require('precss'),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 0.01%"
                                    ],
                                    flexbox: 'no-2009',
                                })
                            ]
                        }
                    },
                    {
                        loader: require.resolve('less-loader'),
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
                    chunks: "async", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
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
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            },
        }),
        // new ExtractTextWebpackPlugin({
        //     filename: '[name].css'
        // })
        // new PreRender({
        //     staticDir: path.join(__dirname,'dist'),
        //     routes: ['/']
        // })
    ]
});

module.exports = config;
