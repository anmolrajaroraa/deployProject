const OrderSchema = require('../schemas/orderDataSchema');
const config= require('../../Utils/statusconfig');
const DeliveryCrud={

getStandardDeliveryDetails(id,res){
OrderSchema.StandardDelivery.findOne({deliveryId:id},(err,doc)=>{
    if(err){
res.status(409).json({status:config.ERROR,message:'DB Error'});
    }else if(doc==null){
      res.status(409).json({status:config.EMPTY,message:'No Delivery Details Found'});
    }else{
        res.status(200).json({status:config.SUCCESS, STdelivery:doc});
    }
})

}
,
getExpressDeliveryDetails(id,res){
    OrderSchema.ExpressDelivery.findOne({deliveryId:id},(err,doc)=>{
        if(err){
    res.status(409).json({status:config.ERROR,message:'DB Error'});
        }else if(doc==null){
          res.status(409).json({status:config.EMPTY,message:'No Delivery Details Found'});
        }else{
            res.status(200).json({status:config.SUCCESS, EXPdelivery:doc});
        }
})
},

getSTDdetailsAsPerTimeSlot(dateobj){
    return function(delobj,cb){
       // console.log(dateobj,delobj);
        OrderSchema.StandardDelivery.find({
            "timeSlot.tsId":delobj._id,
            "timeSlot.date.Date":dateobj.Date,
            "timeSlot.date.Month":dateobj.Month,
            "timeSlot.date.Year":dateobj.Year,
            "pending.pendingStatus":true,
            isVendorAlloted:false
        },(err,doc)=>{
            if(err){
               // console.log(err);
                cb('DB Error');
            }else if(doc.length==0){
                cb('No Orders Present');
            }else{
                cb(null,doc);
            }
        })

    }
},

getEXPdetailsAsPerTimeSlot(dateobj){
    return function(delobj,cb){
      //  console.log(dateobj,delobj);
        OrderSchema.ExpressDelivery.find({
            "timeSlot.tsId":delobj._id,
            "timeSlot.date.Date":dateobj.Date,
            "timeSlot.date.Month":dateobj.Month,
            "timeSlot.date.Year":dateobj.Year,
            "pending.pendingStatus":true,
            isVendorAlloted:false
        },(err,doc)=>{
            if(err){
                cb('DB Error');
            }else if(doc.length==0){
                cb('No Orders Present');
            }else{
                cb(null,doc);
            }
        })

    }
}
,
setVendorAlloted(delobj){
return function(cb){
    if(delobj.type=='ST'){
        OrderSchema.StandardDelivery.findOneAndUpdate({ deliveryId:delobj.deliveryId},
            {isVendorAlloted:delobj.vendorstatus},
            {new:true},(err,doc)=>{
            if(err){
                return cb('DB Error');
            }else if(doc==null){
                return cb('No Document Found');
            }else{
                cb(null,doc);
            }
        })
    }
   else if(delobj.type=='EXP'){
            OrderSchema.ExpressDelivery.findOneAndUpdate({deliveryId:delobj.deliveryId},
                {isVendorAlloted:delobj.vendorstatus},{new:true},(err,doc)=>{
                if(err){
                    return cb('DB Error');
                }else if(doc==null){
                    return cb('No Document Found');
                }else{
                    cb(null,doc);
                }
            })   
    }
 
}
},
setDeliveryLevel(obj){
return function(deldate,cb){
    if(obj.type=='ST'){
        OrderSchema.StandardDelivery.findOneAndUpdate({deliveryId:obj.deliveryId},
            {$set:{"pending.pendingLevel":deldate.level}},(err,doc)=>{
     if(err){
         return cb('DB Error');
     }else if(doc==null){
         return cb('No Doc Found');
     }else{
         cb(null,deldate);
     }
        })
    } else if(obj.type=='EXP'){
        OrderSchema.ExpressDelivery.findOneAndUpdate({deliveryId:obj.deliveryId},
            {$set:{"pending.pendingLevel":deldate.level}},(err,doc)=>{
     if(err){
         return cb('DB Error');
     }else if(doc==null){
         return cb('No Doc Found');
     }else{
         cb(null,deldate);
     }
        })
    }
}
},
completeDelivery(obj){
return function(deldate,cb){
    if(obj.type=='ST'){
        OrderSchema.StandardDelivery.findOneAndUpdate({deliveryId:obj.deliveryId},
            {$set:{"pending.pendingLevel":deldate.level, "pending.pendingStatus":false,
            "pending.pendingMessage":"Order Completed"}},(err,doc)=>{
     if(err){
         return cb('DB Error');
     }else if(doc==null){
         return cb('No Doc Found');
     }else{
         cb(null,deldate);
     }
        })
    } else if(obj.type=='EXP'){
        OrderSchema.ExpressDelivery.findOneAndUpdate({deliveryId:obj.deliveryId},
            {$set:{"pending.pendingLevel":deldate.level,"pending.pendingStatus":false,
            "pending.pendingMessage":"Order Completed"}},(err,doc)=>{
     if(err){
         return cb('DB Error');
     }else if(doc==null){
         return cb('No Doc Found');
     }else{
         cb(null,deldate);
     }
        })
    }
}
}
}

module.exports=DeliveryCrud;