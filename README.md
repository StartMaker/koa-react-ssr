# koa-react-ssr
react ssr

##### 开发环境

1、nodemon： koa开发环境，可以对服务端代码实现热更新

2、koa-webpack：koa开发坏境，可以在运行koa服务器的同时，对客户端代码实现热更新。webpack的热更新要禁用，否则会报错

3、react-hot-loader：react组件的热加载，使用方法在npm上有详细介绍

4、解决无window等BOM对象的问题，引入模块JSDOM

5、react-hot-loader：在react16.6版本后的react-dom依赖无法进行热加载，需要安装依赖，详情见：https://www.npmjs.com/package/react-hot-loader

###### 注意事项

1、在对客户端代码打包时，如果不是css in js模式，postcss-loader中exec需要禁用,否则会报错

2、由于node的版本问题，有些文件普通权限无法访问，需要开启管理员权限

3、服务器端渲染打包时，style-loader无法使用（会打包入window和document对象），所以使用isomorphic-style-loader进行替换

##### 命令

1、test:client： 测试 === 端口：3200

测试客户端代码 非同构

2、
