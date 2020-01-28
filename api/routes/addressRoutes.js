const express=require('express');
const addressRoutes=express.Router();
const async= require('async');
const config=require('../../Utils/statusconfig')
const addressCrud=require('../../db/crudOperations/addressCrud');


addressRoutes.get('/getAllAdresses',(req,res)=>{
    addressCrud.getAllAddresses(res);
})

addressRoutes.get('/getAddressinpin',(req,res)=>{
    let pin = req.query.pin;
    async.waterfall([
        addressCrud.getAddressinpin(pin)
    ],(err,result)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:err});
        }else{
            res.status(200).json({status:config.SUCCESS,addresses:result});
        }
    })
})


module.exports=addressRoutes;