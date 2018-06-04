//点击package.js中npm start命令执行这个文件
//这个文件的作用是:1.检查node和npm的版本，2.引入相关插件和配置 3.创建express和webpack编译器
//4.配置开发中间件（webpack-dev-middleware）和热重载中间件 5.挂载搭理服务和中间件
//6.配置静态资源 7.启动服务器特定端口 8.自动打开浏览器
//说明： express服务器提供静态文件服务，不过它还使用了http-proxy-middleware，一个http请求代理的中间件。前端开发过程中需要使用到后台的API的话，可以通过配置proxyTable来将相应的后台请求代理到专用的API服务器。
//这个文件相当于将vue-cli中的dev-server+server文件夹中index.js结合起来
var express=require('express');
var app=express();
var api=require('./server/api.js');
var bodyParser=require('body-parser');
//获取到客户端传的参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//获取到后台的api
app.use(api);
app.use('/',require('connect-history-api-fallback')());
app.use('/',express.static('public'))
//如果是开发模式的话
if(process.env.NODE_ENV!=='production'){
    //引入webpack模式
    var webpack=require('webpack');
    var webpackConfig=require('./webpack.config.js');
    var webpackCompiled=webpack(webpackConfig);

    var webpackDevMiddleware=require('webpack-dev-middleware');//webpack-dev-middleware结合webpack-hot-middleware实现热重载开发服务器，但是这个是直接将代码放在内存中的
    app.use(webpackDevMiddleware(webpackCompiled,{
        publicPath:'/',
        stats:{color:true},
        lazy:false,
        watchOptions:{
            aggregateTimeout:300,
            poll:true
        },
    }));
    //配置热更新
    var webpackHotMiddleware=require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(webpackCompiled));
}
//监听端口
var server=app.listen(2300,function(){
    var port=server.address().port;
    console.log('http://localhost:%s',port);
})