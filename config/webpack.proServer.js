//客户端代码打包 production
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const LessPluginFunctions = require('less-plugin-functions');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//预渲染
// const PreRender = require('prerender-spa-plugin');
//压缩css文件
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const config = webpackMerge(baseConfig, {
  mode: 'production',
  target: 'node',
  output: {
    publicPath: "/",
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    // library: 'MyClient'
  },
  entry: {
    serverRender: path.resolve(__dirname, "../client/build/proServer.js")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('isomorphic-style-loader')
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: require.resolve('postcss-loader')
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: require.resolve('isomorphic-style-loader')
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader')
          },
          {
            loader: require.resolve('sass-loader')
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve('isomorphic-style-loader')
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader')
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              plugins: [
                new LessPluginFunctions()
              ],
              options: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    // 压缩js、css
    minimizer: [
      // new UglifyJsPlugin({
      //     uglifyOptions: {
      //         ie8: true,
      //         ecma: 8
      //     }
      // }),
      new optimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true },
          mergeLonghand: false,
          discardComments: {
            removeAll: true // 移除注释
          }
        },
        canPrint: true
      })
    ],
    //清除无用的代码
    usedExports:true,
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
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '..'),
    }),
    // new MiniCssExtractPlugin({ // 在plugins中配置属性
    //     //   filename: 'css/[name].css', // 配置提取出来的css名称
    //     //   chunkFilename: "css/chunk-[id].css"
    //     // }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    // new PreRender({
    //     staticDir: path.join(__dirname,'dist'),
    //     routes: ['/']
    // })
  ]
});

module.exports = config;
