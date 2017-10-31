const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db=mongoose.connection;
db.once('error',()=>console.log('Mongodb connection error'));
db.once('open',()=>console.log('Mongodb connection successed'));

//创建模型
const home=mongoose.Schema({
    title:String,
    time:Date,
    sort:String,
    user:String,
    con:String,
    file:String,
    like:Number,
    collect:String
})
const zhuanlan=mongoose.Schema({
    title:String,
    user:String,
    con:String,
    like:Number,
    collect:Number
})
const find=mongoose.Schema({
    title:String,
    user:String,
    con:String,
    type:String,
    like:Number,
    collect:Number
})
//创建对象
const Models={
    home:mongoose.model('home',home,'home'),
    zhuanlan:mongoose.model('zhuanlan',zhuanlan,'zhuanlan'),
    find:mongoose.model('find',find,'find')
}

module.exports=Models