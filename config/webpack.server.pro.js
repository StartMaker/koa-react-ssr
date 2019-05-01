const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'production',
    output: {
        publicPath: "/server/",
        filename: 'js/[name]-[contentHash].js',
        libraryTarget: 'commonjs2',
        library: 'MyServer',
        path: path.join(__dirname, 'dist'),
    },
    entry: {
        server: path.resolve(__dirname, "/server/index.js")
    },
    module: {
        rules:[]
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
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = config;
