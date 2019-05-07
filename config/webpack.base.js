//客户端打包 base
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:"babel-loader"
                        // options: {
                        //     "presets": [
                        //         "@babel/preset-env","@babel/preset-react","@babel/preset-typescript"
                        //     ],
                        //     "plugins": [
                        //         ["@babel/plugin-transform-runtime",{"corejs": 2}],
                        //         "@babel/plugin-transform-object-assign",
                        //         ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        //         ["@babel/plugin-proposal-class-properties",{
                        //             "loose": true
                        //         }],
                        //         "react-hot-loader/babel",
                        //         ["import", { "libraryName": "antd", "libraryDirectory": "lib", "styles": "css"}, "ant"],
                        //         // ["import", { "libraryName": "ant-mobile", "libraryDirectory": "lib"}, "ant-mobile"],
                        //         "@babel/plugin-syntax-dynamic-import"
                        //     ]
                        // }
                    },
                    "astroturf/loader"
                ]
            },
            {
                test: /\.(png|woff|woff2|svg|eot|jpg)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype:'image/png',
                            name: 'images/[name].[hash:7].[ext]'
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
            // {
            //     test: /\.(png|svg|jpg|gif|ttf)$/,
            //     use: [
            //         {
            //             loader: 'file-loader'
            //         }
            //     ]
            // },
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
        extensions: [".js", ".json", ".jsx",".ts",".tsx"],
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..'),
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
};