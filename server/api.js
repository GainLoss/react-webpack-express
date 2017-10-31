const express=require('express');
const path=require('path');
const models=require('./db.js');
const router=express.Router();
const util=require('util');

const ObjectID = require('mongodb').ObjectID;
//展示home
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
//展示详情
router.post('/list/detail',(req,res)=>{
    console.log(req.body)
    let id=req.body.id;
    models.home.find({"_id":ObjectID(id)}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})

module.exports=router