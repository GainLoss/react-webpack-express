var webpack=require('webpack');
var path=require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: ['webpack-hot-middleware/client', './src/app.js'],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        publicPath:"./"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:['./src/'],
                loader:'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js[x]$/,
                include:['./src/'],
                loader:'babel-loader,jsx,babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('[name]-[hash:3].css'), //css随机数
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        
    ],
    
   
    
}