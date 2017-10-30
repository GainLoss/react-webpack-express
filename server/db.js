const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db=mongoose.connection;
db.once('error',()=>console.log('Mongodb connection error'));
db.once('open',()=>console.log('Mongodb connection successed'));

const home=mongoose.Schema({
    title:String,
    user:String,
    time:Date,
})

const Models={
    Home:mongoose.model('Home',home,'home')
}

module.exports=Models