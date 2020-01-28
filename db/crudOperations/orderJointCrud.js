const cartModel=require('../schemas/cartSchema');
const OrderSchema =require('../schemas/orderDataSchema')
const config = require('../../Utils/statusconfig');
const comments = require('../../Utils/comments');
const idgen = require('../../Utils/idGenerator/idGen');
let async= require('async');
const deljointSchema = require('../schemas/orderJointSchema');
const host='localhost';
const timeSlotCrud=require('../crudOperations/timeSlotCrud');
const ReturnDelivSchema=  require('../schemas/returnDelivSchema');


const orderJointCrud={
    addOrderJoint(delobj){
        return function(cb){
   let status= new  deljointSchema.datestatus({
                allotedDate:new Date(),
                isAlloted:true
            })
  let allotstatus = new deljointSchema.allotStatus({
             vendorAllotStatus:status,
            })
    let schema = new  deljointSchema.joinOrderSchema({
    vendorId:delobj.vendorId,
    vendorsellDelProducts:[],
    vendorAllowProducts:delobj.prodIds,
    vendorOrderPrice:null,
    deliveryId:delobj.deliveryId,
    type:delobj.type,
    allotStatus:allotstatus,
    orderId:delobj.orderId,
    pending:true,
    isReady:false,
    deliveryBoyId:null
})

schema.save((err)=>{
    if(err){
        return cb('DB Error');
    }else{
        cb(null,true);
    }
})
        }
    },

getAllocatedVendorDeliveries(type){
  //  console.log(type);
    return function(cb){
       deljointSchema.joinOrderSchema.find({vendorId:{$ne:null},"allotStatus.vendorAllotStatus.isAlloted":true,type:type,pending:true},(err,docs)=>{
       if(err){
           return cb('DB Error');
       }else if(docs.length==0){
           return cb('No Orders Found');
       }else{
           cb(null,docs);
       }
        })
    
    }
    },

checkIfVendorAccepted(obj){
    return function(cb){
        console.log(obj);
        deljointSchema.joinOrderSchema.findOne({vendorId:obj.vendorId,deliveryId:obj.deliveryId},(err,doc)=>{
            if(err){
               return cb('DB Error');
            }else if(doc==null){
                return cb('No Order Found');
            }else{
                if(doc.vendorsellDelProducts.length==0){
                    return cb(null,obj)
                }else{
                    return cb({isAccepted:true})
                }
            }
        })
    }
},


checkIfvendorAlreadyHasDelId(delId){
    return function(vendors,cb){
        console.log(vendors)
    async.forEachOf(vendors,(vendor,i,innercb)=>{
        deljointSchema.joinOrderSchema.findOne({$and:[{vendorId:vendor.id},{deliveryId:delId}]},(err,docs)=>{
  if(err){
     return innercb('DB Error');
  }else if(docs!=null){
     // console.log('here',i);
      vendors.splice(i,1);
     return innercb(null);
  }else{
      innercb(null)
  }
        })
    },(err)=>{
        if(err){
            return cb(err);
        }else{
            return cb(null,vendors);
        }
    })
    }
}
,
    setToReturnedOrderSlot(){
return function(doc,cb){
    console.log(doc);
        let schema= new ReturnDelivSchema.returnOrderSchema({
            vendorAvailProducts:doc.vendorAllowProducts,
               deliveryId:doc.deliveryId,
               type:doc.type,
               orderId:doc.orderId,
               pending:doc.pending 
        })
console.log(schema);
schema.save((err)=>{
    if(err){
        return cb('DB Error');
    }else {
        cb(null,true);
    }
})

    }
    },
    removeOrderJoint(obj){
        return function(status,cb){
            console.log(status,obj);
            deljointSchema.joinOrderSchema.findByIdAndDelete(obj._id,(err,doc)=>{
                if(err){
                  return  cb('DB Error');
                }else if(doc==null){
                    console.log('here');
                    return cb('No Order Found')
                }else{
                    cb(null,true)
                }
            })
        }
    },

    getUnAcceptedDelOrders(type){
        return function(cb){
            ReturnDelivSchema.returnOrderSchema.find({pending:true,type:type},(err,docs)=>{
                if(err){
                    return cb('DB Error');
                }else if(docs.length==0){
                    return cb('No Order Found');
                }else{
                    cb(null,docs);
                }
            })
        }
    },

    removeUnAcceptedDelOrders(order){
        return function(cb){
            if(order.undeid!=null){
            //    console.log(order)
                ReturnDelivSchema.returnOrderSchema.findByIdAndDelete(order.undeid,(err,doc)=>{
                    if(err){
                        return cb('DB Error');
                    }else{
                        return cb(null,true);
                    }
                })
            }else{
                return cb(null,true);
            }
       
        }
    },
    getPreAllocatedDelBoy(obj){
       // console.log(obj);
    return function(cb){
    deljointSchema.joinOrderSchema.findOne({deliveryBoyId:{$ne:null},
        deliveryId:obj.deliveryId,pending:true},(err,doc)=>{
        if(err){
            return cb('DB Error');
        }else if(doc==null){
            return cb('No One Found');
        } else{
            return cb(null,doc);
        }
    })
    }
    },
    completeTheseOrderJoint(obj){
        console.log(obj);
        return function(cb){
           async.each(obj.vendors,(vendor,innercb)=>{
               console.log(vendor);
               deljointSchema.joinOrderSchema.findOneAndUpdate({vendorId:vendor.vendorId,deliveryId:obj.deliveryId,deliveryBoyId:obj.deliveryBoyId,pending:true},{$set:{pending:false}},{new:true},(err,doc)=>{
                   if(err){
                       return innercb('DB Error');
                   }else {
                   innercb();
                   }
               })
           },(err)=>{
               if(err){
                   return cb(err);
               }else{
                   console.log('here');
                   cb(null,obj);
               }
           }) 
        }
    }


}

module.exports=orderJointCrud;