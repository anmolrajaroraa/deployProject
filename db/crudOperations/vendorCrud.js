const Emp=require("../schemas/empSchema");
const vendor = require('../schemas/vendorSchema');
const config=require('../../Utils/statusconfig');
const OrderSchema = require('../schemas/orderDataSchema');
const joinOrderSchema = require('../schemas/orderJointSchema');
const returnOrderSchema =require('../schemas/returnDelivSchema');
const vendorDelDateSchema = require('../schemas/vendorDelDateSchema');
const vendorCrud={
    setVendorProduct(vendorobj,products){
        return function(cb){
         vendor.findOneAndUpdate({id:vendorobj.id},{$set:{sellproducts:products}},(err,doc)=>{
      if(err){
          cb('DB Error');
      }else if(doc==null){
          cb('No User Found To Update!');
      }else{
          cb(null,doc);
      }
  })
        }
    }
,
setOnlineStatus(user,status){
    return function(cb){
vendor.findOneAndUpdate({'id':user.id,isloggedOnce:true,
verified:true},{$set:{"isAvail":status}},(err,doc)=>{
    if(err){
     return   cb('DB Error');
    }else if(doc==null){
  return cb('No User Found');
    }else{
        cb(null,doc);
    }
})
}
}
,
setisLoginOnceStatus(user,status){
    return function(cb){
        vendor.findOneAndUpdate({'id':user.id},{$set:{isloggedOnce:status}},{new:true},(err,doc)=>{
            if(err){
             return cb('DB Error');
            }else if(doc==null){
          return cb('No User Found');
            }else{
                cb(null,doc);
            }
        })
        }
        }
,
checkLoginStatus(user){
    return function(cb){
        vendor.findOne({id:user.id,isloggedOnce:true,
            verified:true},(err,doc)=>{
    if(err){
     return   cb('DB Error');
    }else if(doc==null){
return cb('No User Found')
    }else{
cb(null,doc);
    }
        })
    }
}
,
searchVendorByPin(pin){
    return function(cb){
        vendor.find({"pin_code":pin,isloggedOnce:true,
        isAvail:true,
        verified:true},(err,docs)=>{
if(err){
    cb('DB Error');
}else if(docs.length==0){
cb('No Vendor Found');
}else{
    cb(null,docs);
}
        })
    }
}


,
getAssignedOrders(vendor){
    return function(cb){
        joinOrderSchema.joinOrderSchema.find({vendorId:vendor.id,pending:true,isReady:false,
             vendorsellDelProducts:{$ne:[]}},(err,docs)=>{
            if(err){
        return cb('DB Error');
            }else if(docs.length==0){
            return cb('No In Process Order');
            }else{
                cb(null,docs);
            }
        })
    }

}
,
setVendorGeoLocation(user,array){
return function(cb){
    vendor.findOneAndUpdate({id:user.id},{$set:{"location.coordinates":array}},(err,doc)=>{
        if(err){
            cb('DB Error');
        }else if(doc==null){
return cb('No Doc Present')
        }else{
            cb(null,true);
        }
    })
}
}
,
    getPendingOrders(vendor){
   return function(cb){
       joinOrderSchema.joinOrderSchema.find({vendorId:vendor.id,vendorsellDelProducts:[]},(err,doc)=>{
           if(err){
               cb('DB Error');
           }else if(doc.length==0){
               cb('No Order Found');
           }else {
               cb(null,doc);
           }
       })
   }
    },

setUnAcceptedOrderProducts(doc){
    return function(cb){
        if(doc.unacceptedProds.length!=0){
let schema= new returnOrderSchema.returnOrderSchema({
    vendorAvailProducts:doc.unacceptedProds,
       deliveryId:doc.deliveryId,
       type:doc.type,
       orderId:doc.orderId,
       pending:doc.pending 
})

schema.save((err)=>{
    if(err){
        return cb('DB Error');
    }else{
        cb(null,true)
    }
})}else{
            cb(null,true)
        }
    }
}
    ,
 setVendorOrderProductsAndPrice(op){
     console.log(op);
     return function(cb){
         joinOrderSchema.joinOrderSchema.findByIdAndUpdate(op._id,
            {vendorsellDelProducts:op.vendorsellDelProducts, vendorOrderPrice:op.vendorOrderPrice},
            {new:true},(err,doc)=>{
             if(err){
                 return cb('DB Error');
             }else if(doc==null){
                return cb('Time Expired');
             }else{
                 cb(null,doc);
             }
         })
     }
 }

 ,
 getReadyOrders(obj){
return function(cb){
    joinOrderSchema.joinOrderSchema.find({vendorId:obj.id,pending:true,isReady:true},(err,docs)=>{
        if(err){
            return cb('DB Error');
        }else if(docs.length==null){
            return cb('No Recent Approved Orders');
        }else{
            cb(null,docs);
        }
    })
}
 }

 ,

 confirmOrderReady(vendor){
     return function(info,cb){
         joinOrderSchema.joinOrderSchema.findOneAndUpdate({vendorId:vendor.vendorId,deliveryId:vendor.deliveryId},
            {$set:{isReady:true}},(err,doc)=>{
             if(err){
     return cb('DB Error');
             }else if(doc==null){
 return cb('No Order Found');
             }else{
 cb(null,info);
             }
         })
     }

 }
 ,

setVendorDelDate(vendor){
    return function(info,cb){
    //    console.log(info);
        vendorDelDateSchema.findOne({deliveryId:vendor.deliveryId},(err,doc)=>{
            if(err){
               return cb('DB Error');
            }else if(doc==null){
            let deldate = new vendorDelDateSchema({
                deliveryId:vendor.deliveryId,
                level:info.deliveryDates[0].levelValue,
                vendorId:vendor.vendorId,
                date:new Date()
            })

            deldate.save((err)=>{
                if(err){
                    return cb('DB Error');
                }else{
                    cb(null,deldate)
                }
            })
            }else{
                let deldate = new vendorDelDateSchema({
                    deliveryId:vendor.deliveryId,
                    level:doc.level,
                    vendorId:vendor.vendorId,
                    date:new Date()
                })
    
                deldate.save((err)=>{
                    if(err){
                        return cb('DB Error');
                    }else{
                        cb(null,deldate)
                    }
                })
            }
        })
    }
}
 ,
    getOrderedProducts(delobj){
        console.log(delobj)
        return function(cb){
            if(delobj.type=='EXP'){
        
        OrderSchema.ExpressDelivery.aggregate([
           { $match:{
                deliveryId:delobj.deliveryId,
            }
           },
           {$project:{
            orderProducts:{
                $filter:{
                    "input" : "$orderProducts",
                    "as" : "orderProducts",
                    "cond":{
                        
                            $in:[ "$$orderProducts.opId",delobj.products]
                        
                    }
                }
            }
           }},
        ], (err,doc)=>{
               if(err){
                   console.log(err);
                   return cb('DB Error');
               }else if(doc==null){
                   return cb('DB Error');
               }else{
                   //console.log(doc);
                   cb(null,doc);
               }
           })
            }else if(delobj.type =='ST'){
                OrderSchema.StandardDelivery.aggregate([
                    { $match:{
                         deliveryId:delobj.deliveryId,
                     }
                    },
                    {$project:{
                     orderProducts:{
                         $filter:{
                             "input" : "$orderProducts",
                             "as" : "orderProducts",
                             "cond":{
                                $in:[ "$$orderProducts.opId",delobj.products]
                             }
                         }
                     }
                    }},
                 ], (err,doc)=>{
                        if(err){
                            return cb('DB Error');
                        }else if(doc==null){
                            return cb('DB Error');
                        }else{
                            cb(null,doc);
                        }
                    })
            }else{
                return cb('Type Error');
            }
        }
    }
}


module.exports=vendorCrud;