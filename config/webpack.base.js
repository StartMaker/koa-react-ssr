const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    // output:{
    //     path: path.resolve(__dirname, '../dist')
    // },
    module: {
        rules: [
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
                test: /\.(png|woff|woff2|svg|eot)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                    // {
                    //     loader:'@svgr/webpack',
                    //     options:{
                    //         babel: true,
                    //         icon: true
                    //     }
                    // }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
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
            {
                test: /\.json?$/,
                use: {
                    loader: 'json-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..'),
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
};