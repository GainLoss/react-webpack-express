const express=require('express');
const path=require('path');
const modles=require('./db.js');
const router=express.Router();
const util=require('util');

router.get('/list/show',(req,res)=>{
    models.home.find((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})
model.exports=router