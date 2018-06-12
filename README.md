# react-webpack-express
这是仿照掘金网站的一个用react+express+mongodb实现的可以前后台交互的网站
* 项目中用到的是自己构建的一个开发环境，当然你也可以用官方的脚手架（create-react-app）
### 模块 
依赖的模块直接看package.json
### 运行 
* 执行命令：npm start(当前是没有弄自动打开浏览器其实就是opn这个模块)
* 打开浏览器：http://localhost:2300（端口号可以在dev-server.js文件中查看）
### 项目的结构

![maze](https://github.com/GainLoss/react-webpack-express/blob/master/src/imges/jiegou.png) 

### 注意
* 说一下调试react的工具：可以用facebook的调试工具React devtools(翻墙在chrome浏览器中扩展程序中查找这个，然后进行安装)；
* 目前完成的功能是：实现界面基本的显示，可以调取后台数据，通过选择对数据进行筛选和排序；
* 当前前台和后台公用一个接口，并没有跨域，如果在真正的环境中，需要跨域；
* 如果clone下来页面之后，需要考虑的是缺少node_module这个文件夹（需要自己根据项目中的package.json文件里面显示的库名称袭来）；
* 还有需要在自己本地数据库中将我们需要的库和集合创建（参考server/db.js文件中）
### 创建项目的基本过程
* 前期准备：电脑上需要安装node npm git ,还有需要写代码的编辑器；
* 安装项目需要的依赖包：express（后台）、mongoose（链接数据库）、webpack（解析和打包文件、热更新）、react+react-router(前台和路由)之类相关；
* 先写前台页面，等基本的前台页面的结构搭建好之后，开始在server中编写后台接口；
### 项目的基本流程
* 用git将项目clone下来，在文件夹中执行npm start（为甚是这个参考package.json）
* 打开浏览器输入:localhost:2300 这样就打开项目页面了
### 相关说明
* [React理解](http://www.cnblogs.com/GainLoss/p/7692315.html)
* [整个项目说明](http://www.cnblogs.com/GainLoss/p/7753154.html) 
* [React总结](http://www.cnblogs.com/GainLoss/p/7692315.html) 
### 补充:
* 现在基本上前后台可以交互了


