# react-webpack-express
这儿还是仿照掘金的实现的一个react的网站，前台应用的是React react-router4,后台应用的是express,数据库用的是mongodb
### 模块 
依赖的模块直接看package.json
### 运行 
* 执行命令：npm start(当前是没有弄自动打开浏览器其实就是opn这个模块)
* 打开浏览器：http://localhost:2000
### 项目的结构

![maze](https://github.com/GainLoss/react-webpack-express/blob/master/src/imges/jiegou.png) 

### 注意
* 说一下调试react的工具：可以用facebook的调试工具React devtools(翻墙在chrome浏览器中扩展程序中查找这个，然后进行安装)
* 目前完成的功能是：实现界面基本的显示，可以调取后台数据，通过选择对数据进行筛选和排序
### 创建项目的基本过程
* 下载node
* 安装基本的依赖包 express（后台）、mongoose（链接数据库）、webpack（解析和打包文件、热更新）、react+react-router(前台和路由)
* 执行命令npm init创建package.json(执行命令和依赖包名称) 创建webpack.config.js（解析文件和打包）
* 创建src（存放前台组件）创建server(存放后台代码)
### 项目的基本流程
我们这个项目是需要前后台协同合作的，但是我们先开始一步一步的来;
### 相关说明
[React理解](http://www.cnblogs.com/GainLoss/p/7692315.html)
[整个项目说明](http://www.cnblogs.com/GainLoss/p/7753154.html) 
[React总结](http://www.cnblogs.com/GainLoss/p/7692315.html) 
### 接下来是将页面按照原本的显示全，肯定还会有其他功能需要补充的


