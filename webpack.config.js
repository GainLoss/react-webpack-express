var webpack=require('webpack');
var path=require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: ['webpack-hot-middleware/client', './src/app.jsx'],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        publicPath:"./"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'babel']
                }
            },
           
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test:/\.jpg|png|gif|jpeg$/,
                exclude:/node_modules/,
                loader:'url-loader'
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