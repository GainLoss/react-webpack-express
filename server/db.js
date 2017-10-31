const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db=mongoose.connection;
db.once('error',()=>console.log('Mongodb connection error'));
db.once('open',()=>console.log('Mongodb connection successed'));

const home=mongoose.Schema({
    title:String,
    user:String,
    con:String
})

const Models={
    home:mongoose.model('home',home,'home')
}

module.exports=Models