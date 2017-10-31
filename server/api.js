const express=require('express');
const path=require('path');
const models=require('./db.js');
const router=express.Router();
const util=require('util');

router.get('/list/show',(req,res)=>{
    models.home.find(function(err,data){
        if(err){
            res.send(err)
        }else{
            console.log(data)
            res.send(data)
        }
    })
   
})

module.exports=router