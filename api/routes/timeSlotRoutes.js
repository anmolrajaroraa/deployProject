const express= require('express');
const timeSlotRoutes = express.Router();
const async= require('async');
const timeSlotCrud= require('../../db/crudOperations/timeSlotCrud');
const config= require('../../Utils/statusconfig');
timeSlotRoutes.get('/getTimeSlot',(req,res)=>{
async.waterfall([
    timeSlotCrud.getTimeSlots()
],(err,results)=>{
    if(err){
        res.status(409).json({status:config.ERROR, message:err})
    }else{
        res.status(200).json({status:config.SUCCESS,timeSlots:results})
    }
})
})

timeSlotRoutes.get('/getAvailableTimeSlot',(req,res)=>{
    async.waterfall([
        timeSlotCrud.getAvailableSlots()
    ],(err,results)=>{
        if(err){
            res.status(409).json({status:config.ERROR, message:err})
        }else{
            res.status(200).json({status:config.SUCCESS,timeSlots:results})
        }
    })
})



module.exports= timeSlotRoutes;