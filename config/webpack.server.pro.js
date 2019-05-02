const path = require('path');
const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// process.env.NODE_ENV = 'production';
const config = {
    mode: 'production',
    target:'node',
    output: {
        publicPath: "/server/",
        filename: 'js/[name]-[contentHash].js',
        libraryTarget: 'commonjs2',
        library: 'MyServer',
        path: path.join(__dirname, '../dist'),
    },
    entry: {
        server: path.resolve(__dirname, "../server/index.js")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    externals: Object.keys(require('../package.json').dependencies),
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:"babel-loader",
                        options: {
                            "presets": [
                                "@babel/preset-env","@babel/preset-react","@babel/preset-typescript"
                            ],
                            "plugins": [
                                ["@babel/plugin-transform-runtime",{"corejs": 2}],
                                "@babel/plugin-transform-object-assign",
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties",{
                                    "loose": true
                                }],
                                "react-hot-loader/babel",
                                ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, "ant"],
                                ["import", { "libraryName": "ant-mobile", "libraryDirectory": "lib"}, "ant-mobile"],
                                "@babel/plugin-syntax-dynamic-import",
                                "dynamic-import-node"
                            ]
                        }
                    },
                    "astroturf/loader"
                ]
            },
            {
                test: /\.json?$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ]
    },
    // optimization: {
    //     // 压缩js
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 ie8: true,
    //                 ecma: 8
    //             }
    //         })
    //     ],
    //     // 抽离公用的js部分 , 配置自动提取node_modules里用到的模块如jquery
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /\.js$/,
    //                 chunks: "all", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
    //                 enforce: true
    //             },
    //         }
    //     }
    // },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            },
        })
    ]
};

module.exports = config;
