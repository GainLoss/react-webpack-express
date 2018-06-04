const express=require('express');
const path=require('path');
const models=require('./db.js');
const router=express.Router();

const util=require('util');

const ObjectID = require('mongodb').ObjectID;

//展示home
router.post('/list/show',function(req,res){
    models.home.find().exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
    //console.log(req)
})

//展示详情
router.post('/list/detail',(req,res)=>{
    let id=req.body.id;
    models.home.find({"_id":ObjectID(id)}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})
//展示zhuanlan
router.post('/zl/list/show',(req,res)=>{
    let tab=req.body.tab;//根据all和web
    let sort=req.body.sort;//排序
    let json={};
    json[sort]=1;
    models.zhuanlan.find({sort:tab}).sort(json).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})
//展示find发现
router.post('/find/list/show',(req,res)=>{
    let tab=req.body.tab;//根据all和web
    let sort=req.body.sort;//排序
    let json={};
    json[sort]=1;
    console.log(tab)
    models.find.find({sort:tab}).sort(json).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})
//沸点内容
router.post('/feidian/list/show',(req,res)=>{
    models.feidian.find().exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})
module.exports=router