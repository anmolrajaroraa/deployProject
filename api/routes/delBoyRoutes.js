const express=require('express');
const delBoyRoutes=express.Router();
const jwt=require('jsonwebtoken');
const async=require('async');
const config=require('../../Utils/statusconfig');
const jwtVerification = require('../../Utils/jwt/jwtverify');
const delBoyCrud=require('../../db/crudOperations/delBoyCrud');
const delBoyInitialInfo=require('../../models/setterGetter/delBoy.model');
const delDateStatusCrud= require('../../db/crudOperations/delivLevelCrud');
const deliveryCrud=require('../../db/crudOperations/deliveryCrud');
const orderJoinCrud=require('../../db/crudOperations/orderJointCrud');
const orderCrud=require('../../db/crudOperations/orderCrud');
const accountCrud=require('../../db/crudOperations/accountsCrud');
delBoyRoutes.post('/login',async function(req,res){
    var delBoyData= await delBoyCrud.login({'empId':req.body.id});
    console.log(delBoyData);
   if(delBoyData){
        jwt.sign({delBoyData},jwtVerification.delBoySecurekey,{expiresIn:jwtVerification.delboyExpiryTime},(err,token)=>{ 
                     //token is generated after checking the presence of user
        res.json({
            token:token
        })
    })
    }
    else{
        res.status(409).json('Error');
    }
})

delBoyRoutes.get('/getPendingOrders',jwtVerification.delboyverifyToken,(req,res)=>{ //jwt implement
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            
            delBoyCrud.getPendingOrders(res,authData.delBoyData.empId);
        }
    })

})

delBoyRoutes.post('/getOrderData',jwtVerification.delboyverifyToken,(req,res)=>{ //jwt implement
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            delBoyCrud.getOrderData(res,req.body.orderDetails);
        }
    })

})

delBoyRoutes.post('/getFullOrderData',jwtVerification.delboyverifyToken,(req,res)=>{ //jwt implement
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            delBoyCrud.getFullOrderData(res,{deliveryId:req.body.deliveryId,vendorId:req.body.vendorId});
        }
    })

})

delBoyRoutes.post('/changeStatus',jwtVerification.delboyverifyToken,(req,res)=>{
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            delBoyCrud.changeStatus(res,{'empId':authData.delBoyData.empId,status:req.body.status});
        } 
    })

})

delBoyRoutes.post('/orderDelivered',jwtVerification.delboyverifyToken,(req,res)=>{
    //delBoyCrud.orderDelivered(res)
    //this one is going to be complex
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
          //  console.log(req.body.orderDetails)
async.parallel([
    function(cb){
        async.waterfall([
            delDateStatusCrud.getLastDelLevel(req.body.orderDetails.deliveryId),
            function(info,innercb){
                let obj={
                    level:(info.deliveryDates[0].levelValue),
                    date:new Date(),
                    deliveryId:req.body.orderDetails.deliveryId
                }
                innercb(null,obj)},
                deliveryCrud.completeDelivery(req.body.orderDetails),
                delDateStatusCrud.setDynamicDelForwardStatus()
        ],(err,results)=>{
           // console.log(err);
            if(err){
                cb(err);
            }else{
                cb(null);
            }
        })
    },
    orderJoinCrud.completeTheseOrderJoint(req.body.orderDetails),
    orderCrud.completeOrder(req.body.orderDetails),
    delBoyCrud.shiftoCompletedOrder(req.body.orderDetails,req.body.pushpullArr)
],(err,doc)=>{
//console.log(doc);
    if(err){
        console.log(err);
res.status(409).json({status:config.ERROR,message:err});
    }else{
  res.status(200).json({status:config.SUCCESS,updated:true});
    }
})
        }
    })
})

delBoyRoutes.post('/updateLocation',jwtVerification.delboyverifyToken,(req,res)=>{
    
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            var obj={
                empId:authData.delBoyData.empId,
                location:req.body.location
            }
            delBoyCrud.updateLocation(res,obj);        }
    })
})

delBoyRoutes.get('/getNotifications',(req,res)=>{ 
  //  console.log('in notifications')
    var empId=req.query.id;
    delBoyCrud.getNotifications(req,res,empId); 
})

delBoyRoutes.post('/orderAcception',jwtVerification.delboyverifyToken,(req,res)=>{
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
           // console.log(req.body);
            req.body.orderDetails.empId=authData.delBoyData.empId;
           
        async.waterfall([
    delDateStatusCrud.getLastDelLevel(req.body.orderDetails.deliveryId),
    delBoyCrud.setDelBoyDelDate(req.body.orderDetails),
    deliveryCrud.setDeliveryLevel(req.body.orderDetails),
    accountCrud.addAccountData(req.body.orderDetails),
    delDateStatusCrud.setDynamicDelForwardStatus(),
    delBoyCrud.acceptOrder(req.body.orderDetails,authData.delBoyData.empId)
           ],(err,results)=>{
            if(err){
                console.log(err);
                res.status(409).json({status:config.ERROR,message:err});
            }else{
                console.log('results...' ,results)
                res.status(200).json(results);
            }
           })
             //get empId from jwt
        } 
                  
    })
})


delBoyRoutes.post('/getVendorDetails',jwtVerification.delboyverifyToken,(req,res)=>{ //jwt implement
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            delBoyCrud.getVendorData(res,{deliveryId:req.body.deliveryId,
                empId:authData.delBoyData.empId});
        }
    })

})

// delBoyRoutes.get('/getCustomerInfo',jwtVerification.delboyverifyToken,(req,res)=>{
//     jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
//         //console.log(authData)
//         if(err){
//             res.status(409).json({status:config.ERROR,message:'JWT Error'});
    
//         }else{
//             async.waterfall([
//                 delBoyCrud.getCustomerInfo({'orderId':req.query.orderId})
//             ],(err,result)=>{
//                 if(err){
//                     res.status(409).json({status:config.ERROR,message:err});
   
//                 }else{
//                     res.status(200).json({status:config.SUCCESS,doc:result});
//                 }
//             })
//         }
//     })
//     })

delBoyRoutes.post('/orderRejection',jwtVerification.delboyverifyToken,(req,res)=>{
    jwt.verify(req.delboytoken,jwtVerification.delBoySecurekey,(err,authData)=>{
        //console.log(authData)
        if(err){
            res.status(409).json({status:config.ERROR,message:'JWT Error'});
        }else{
            delBoyCrud.rejectOrder(res,req.body.orderDetails,authData.delBoyData.empId);
        }        
    })
})






delBoyRoutes.get('/searchDelBoys',(req,res)=>{
    console.log(req.body,'search')
    var obj={
        vendorId:req.query.vendorId,
    }
    console.log(obj)
    delBoyCrud.delBoySearch(res,obj)
})


module.exports=delBoyRoutes;