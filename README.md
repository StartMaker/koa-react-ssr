# koa-react-ssr
react ssr

###### 开发环境

1、nodemon： koa开发环境，可以对服务端代码实现热更新

2、koa-webpack：koa开发坏境，可以在运行koa服务器的同时，对客户端代码实现热更新。webpack的热更新要禁用，否则会报错

3、react-hot-loader：react组件的热加载，使用方法在npm上有详细介绍

###### 注意事项

1、在对客户端代码打包时，如果不是css in js模式，postcss-loader中exec需要禁用,否则会报错
