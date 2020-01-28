const delBoys=require('../schemas/delBoySchema');
const vendor=require('../schemas/vendorSchema');
const orderJoin=require('../schemas/orderJointSchema');
const delStatus=require('../schemas/delStatusSchema');
const orderSchema=require('../schemas/orderDataSchema');
const orderDataSchema=require('../schemas/orderDataSchema');
const delBoyDelDateSchema = require('../schemas/delboyDelDateSchema');
const async=require('async');
const config = require('../../Utils/statusconfig');
const eventEmitter=require('events');
const empSchema=require('../schemas/empSchema');
const Stream=new eventEmitter();
const delBoyCrud={

    async login(object){
        var user=await delBoys.findOne({'empId':object.empId,'verified':true})
           if(user){
             if(object.password == user.password){
              console.log('we were here 222');
        return new Promise((resolve,reject)=>{
          resolve(user);
        
        })  
        }
        else{
            return new Promise((resolve,reject)=>{
                reject();
              
              })
        }
   }},

    getNotifications(req,res,empId){     //sse
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive'
          }); 

          Stream.on('push',function(event,data){
            res.write('event: '+String(event)+'\n'+'data: '+JSON.stringify(data)+'\n\n'); 
          })
         
        const interval=setInterval(() => { 
            if(!res.finished){
            delBoys.findOne({"empId":empId,'verified':true},(err,doc)=>{
                if(err){
                    console.log('some error');  
                    // res.write('some error occures');
                    // res.end();
                    clearInterval(interval);
                  }
                  else if(doc!=null){
                    // res.write({"notifications":doc.notifications});
                    console.log('sending data')
                    Stream.emit('push','message',{notifications:doc.notifications});
                  }
                  else{
                    Stream.emit('push','message',null);
                  }
            })}else{
                clearInterval(interval)
            }
        }, 60000);

        req.on('close',()=>{
            clearInterval(interval);
        })
    },
    async autoOrderAllocation(res,order){ 
        //find loc using vendorId
        var vendorobj=await vendor.findOne({id:order.vendorId});
        if(vendorobj){
            console.log(vendorobj);
            delBoys.updateMany({$and:[
                {
                    location:
                      { $near:
                         {
                           $geometry: { type: "Point",  coordinates: vendorobj.location.coordinates },
                           $minDistance: 0,
                           $maxDistance: 100000
                         }
                      }
                },
                {verified:true},
                {status:'available'}
            ]},{$push:{notifications:{deliveryId:order.deliveryId,
                                      vendorId:order.vendorId}
                }},(err)=>{
                  if(err){
                    console.log('some error',err);  
                    res.status(500).json({status:config.ERROR, message:'DB Error'});
                  }
                  else{ 
                    res.status(200).json({status:config.SUCCESS,'isAllocated':true});
                  } 
              })
        }
        else{
            console.log('some error',err);  
            res.status(500).json({status:config.ERROR, message:'Vendor Not Found'});
        }
        
    },
    manualOrderAllocation(res,order){ 
        console.log(order);
        delBoys.findOne({pendingOrders:{$elemMatch:{deliveryId:order.deliveryId,
            vendorId:order.vendorId }},'verified':true},(err,doc)=>{
            if(err){
                console.log('error')
                res.status(500).json('some error occures');
            }
            else if(doc==null){
                delBoys.findOneAndUpdate({$and:[
                    {
                        empId:order.empId
                    },
                    {verified:true},
                    {status:'available'}
                ]},{$push:{pendingOrders:{deliveryId:order.deliveryId,
                                        vendorId:order.vendorId                      
                                    }
                }},(err)=>{       //add docs as param to find if delboy is still aactive or not
                      if(err){
                        console.log('some error',err);  
                        res.status(500).json('some error occures');
                      }
                      else{ 
                        //update the joinproducts collection
                        orderJoin.joinOrderSchema.findOneAndUpdate({deliveryId:order.deliveryId,
                            vendorId:order.vendorId},{deliveryBoyId:order.empId},(err)=>{
                                if(err){
                                    res.status(500).json('some error occures');  
                                }
                                else{
                                    res.status(200).json({status:config.SUCCESS , isUpdated:true});
                                }
                            })
                      } 
                  })
            }
            else{
                res.status(500).json({status:config.ERROR , message:"Already Alloted"});
            }  
        })   
    },

    getDelBoy(){
        return function(info,cb){
        delBoys.findOne( {empId:info.deliveryBoyId},(err,doc)=>{
            if(err){
return cb('DB Error');
            }else if(doc==null){
return cb('No DelBoy Found')
            }else{
       cb(null,doc);
            }
        })
        }
    }
    ,

    async delBoySearch(res,order){ 

        //find the location first using order.vendorId
        var vendorobj=await vendor.findOne({id:order.vendorId});
console.log(vendorobj);
        if(vendorobj){
            delBoys.find({$and:[
                {
                    location:
                      { $near:
                         {
                           $geometry: { type: "Point",  coordinates: vendorobj.location.coordinates },
                           $minDistance: 0,
                           $maxDistance: 100000
                         }
                      }
                },
                {verified:true},
                {status:'available'}
            ]},(err,docs)=>{
                  if(err){
                    console.log('some error',err);  
                    res.status(500).json('some error occures');
                  }
                  else if(docs!=null){ 
                    res.status(200).json({status:config.SUCCESS ,delBoys:docs});
                  } 
                  else{
                    res.status(200).json('no delivery Boys found');
                  }
              })
        }
        else{
            console.log('some error',err);  
            res.status(500).json('some error occures');
        }
        
    },

    getPendingOrders(res,empId){
        delBoys.findOne({'empId':empId,'verified':true},(err,doc)=>{
            if(err){
                console.log('some error');
                res.status(500).json('some error occures');
            }
            else{
                res.status(200).json(doc.pendingOrders);
            }
        }) 
    },

    getOrderData(res,order){
        orderJoin.joinOrderSchema.findOne({vendorId:order.vendorId,
            deliveryId:order.deliveryId},(err,doc)=>{
                if(err){
                    console.log('some error');
                    res.status(500).json('some error occures');
                }
                else if(doc==null){
                    cb('No such order found')
                }
                else{
                    orderSchema.OrderSchema.findOne({orderId:doc.orderId},(err1,doc1)=>{
                        if(err1){
                            console.log('some error');
                            res.status(500).json('some error occures');
                        }
                        else{
                            res.status(200).json(doc1); 
                        }
                    })
                }
        })
    },

    getFullOrderData(res,order){
        console.log(order);
        orderJoin.joinOrderSchema.findOne({vendorId:order.vendorId,
            deliveryId:order.deliveryId,isReady:true},(err,doc)=>{
                if(err){
                res.status(409).json({status:config.ERROR,message:'DB Error'});
                }
                else if(doc==null){
                    res.status(409).json({status:config.ERROR,message:'Order not ready'});
                }
                else{
                    async.parallel([
                        delBoyCrud.getMainOrderData(doc),
                        //delBoyCrud.getDelStatus(order.deliveryId),
                        delBoyCrud.getTimeSlot(doc)
                    ],function(err,results){
                        if(err){
                            res.status(409).json({status:config.ERROR,message:err})
                        }
                        else{
                          //  console.log(doc)
                            var obj={
                                deliveryId:order.deliveryId,
                                vendorId:order.vendorId,
                                deliveryBoyId:doc.deliveryBoyId,
                                orderId:doc.orderId,
                                orderPrice:doc.vendorOrderPrice,
                                delievAddress:results[0].delievAddress,
                                timeSlot:results[1].timeSlot,
                                type:doc.type,
                                paymentMethod:results[0].paymentMethod
                            }

                            res.status(200).json(obj);
                        }
                    })
                }
            })
        
    },
    
  getVendorData(res,obj){
  orderJoin.joinOrderSchema.find({deliveryId:obj.deliveryId,deliveryBoyId:obj.empId},(err,docs)=>{
            if(err){
                 console.log('some error',err);
                 res.status(500).json('some error occures');
             }
             else{
                      var resultArray=[];
                    //  for(let ven of docs){
                    //      let pr= await empSchema.findOne({id:ven.vendorId});
                    //      if(pr){
                    //          let obj1={
                    //              vendorId:ven.vendorId,
                    //              vendorAddress:pr.address,
                    //              products:ven.vendorsellDelProducts,
                    //              vendorOrderPrice:ven.vendorOrderPrice
                    //          }
                    //          resultArray.push(obj1);
                    //      }
                    //  }

                    async.each(docs,(ven,cb)=>{
                       
                        empSchema.findOne({id:ven.vendorId},(err,doc)=>{
                            if(err){
                                return cb('DB Error');
                            }else if(doc==null){
                                return cb('Null Error');
                            }else{
                                let obj1={
                                                 vendorId:ven.vendorId,
                                                 vendorAddress:doc.address,
                                                 products:ven.vendorsellDelProducts,
                                                 vendorOrderPrice:ven.vendorOrderPrice
                                             }
                                             resultArray.push(obj1);
                                cb();
                            }
                        })
                    },(err)=>{
                        if(err){
                            res.status(500).json({status:config.ERROR,message:err}); 
                        }else{
                            res.status(200).json({status:config.SUCCESS,array:resultArray});
                        }
                    })
                 
             }
        }) 
     },
 

    getMainOrderData(order){
        return function(cb){
            orderSchema.OrderSchema.findOne({orderId:order.orderId},(err1,doc1)=>{
                if(err1){
                    cb('Db error');
                }
                else if(doc1==null){
                    cb('No such order found')
                }
                else{
                    cb(null,doc1);
                }
            })
        }
    },

    // getCustomerInfo(obj){
    //     return function(cb){
    //         orderSchema.OrderSchema.findOne({orderId:obj.orderId},{customerId:1,delievAddress:1},(err,doc)=>{
    //             if(err){
    //                    cb('DB Error');
    //             }else if(doc==null){
    //                 cb('No Order Found');
    //             }else{
    //                 cb(null,doc);
    //             }
    //         })
    //     }
    // },

    getTimeSlot(order){
        return function(cb){
           if(order.type=='EXP'){
               orderSchema.ExpressDelivery.findOne({deliveryId:order.deliveryId},(err,doc)=>{
                   if(err){
                       cb('Db error');
                   }
                   else if(doc==null){
                       cb('No such order found')
                   }
                   else{
                       cb(null,doc);
                   }
               })
           }
           else{
              orderSchema.StandardDelivery.findOne({deliveryId:order.deliveryId},(err,doc)=>{
                if(err){
                    cb('Db error');
                }
                else if(doc==null){
                    cb('No such order found')
                }
                else{
                    cb(null,doc);
                }
            })
           }
        }
    },

    //good to have feature
    // getDelStatus(deliveryId){
    //     return function(cb){
    //         delStatus.DelStatus.findOne({'deliveryId':deliveryId},(err,doc)=>{

    //         })
    //     }
    // },

    changeStatus(res,object){
        //console.log(object.empId)
        delBoys.findOneAndUpdate({'empId':object.empId,'verified':true},{status:object.status},(err)=>{
            if(err){
                console.log('some error',err);
                res.status(500).json('some error occures');
            }
            else{
                res.status(200).json('status changed')
            }
        })
    },

    // orderDispatched(){

    // },
 
    orderDelivered(obj){
    return function(){

    }
    },

    updateLocation(res,obj){
        delBoys.findOneAndUpdate({empId:obj.empId,'verified':true,status:'available'},
            {$set:{"location.coordinates":obj.location}},(err)=>{
                if(err){
                    console.log(err)
                    res.status(500).json('some error occures');
                }
                else{
                    res.json({isChanged:true});
                }
            })
    },

    rejectOrder(res,order,empId){
        //console.log(orderData,empId)
        delBoys.findOneAndUpdate({empId:empId,notifications:{deliveryId:order.deliveryId,
            vendorId:order.vendorId },'verified':true},
            {$pull:{notifications:{deliveryId:order.deliveryId,
                vendorId:order.vendorId }}},(err)=>{
            if(err){
                res.status(500).json('some error occurs');
            }
            else{
                res.status(200).json('notification removed');
            }
        })
    },

    acceptOrder(order,empId){
        //push into pending & delete from notifications
        //first check into order collection to check if its already alloted then do this
        return function(info,cb){
            delBoys.findOne({pendingOrders:{$elemMatch:{deliveryId:order.deliveryId,
                vendorId:order.vendorId }},'verified':true},(err,doc)=>{
                if(err){
                    console.log('error')
                   return cb('some error occures');
                }
                else if(doc==null){
                    delBoys.findOneAndUpdate({empId:empId,'verified':true},{$push:{pendingOrders:
                        {deliveryId:order.deliveryId,vendorId:order.vendorId }}},(err,doc)=>{
                        if(err){
                            return cb('some error occures');
                        }
                        else{
                            console.log('here')
                            //update the joinproducts collection
                            orderJoin.joinOrderSchema.findOneAndUpdate({deliveryId:order.deliveryId,
                                vendorId:order.vendorId},{deliveryBoyId:empId},(err)=>{
                                    if(err){
                                       return cb('some error occures');  
                                    }
                                    else{
                                        //delete from notificaton of all
                                        delBoys.updateMany({notifications:{$elemMatch:
                                            {deliveryId:order.deliveryId,
                                            vendorId:order.vendorId }}},
                                            {$pull:{notifications:{deliveryId:order.deliveryId,
                                                                vendorId:order.vendorId }}},
                                            (err)=>{
                                                if(err){
                                                return cb('some error occures');
                                                }
                                                else{
                                                    console.log('alloted');
                                                  cb(null,{"allotedToMe":true});
                                                }
                                        })
                                    }
                                })
                        }
                    })
                }
                else{
                    cb(null,{"alreadyAlloted":true});
                }  
            })  
        }
         
    },

setDelBoyDelDate(delboy){
    return function(info,cb){
       console.log(delboy);
        delBoyDelDateSchema.findOne({deliveryId:delboy.deliveryId},(err,doc)=>{
            if(err){
               return cb('DB Error');
            }else if(doc==null){
            let deldate = new delBoyDelDateSchema({
                deliveryId:delboy.deliveryId,
                level:info.deliveryDates[0].levelValue,
              delboyId:delboy.empId,
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
                let deldate = new delBoyDelDateSchema({
                    deliveryId:delboy.deliveryId,
                    level:doc.level,
                    delboyId:delboy.empId,
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
},

shiftoCompletedOrder(obj,arr){
    return function(cb){
        delBoys.findOneAndUpdate({"pendingOrders.deliveryId":obj.deliveryId},
        {$pull:{ pendingOrders:{"deliveryId":obj.deliveryId}},$push:{"previousOrders":arr}},(err,doc)=>{
            if(err){
               return cb('DB Error');
            }else if(doc==null) {
                 return cb('No Doc Found');
            }else{
                cb();
            }
        })
    }
}


}

module.exports=delBoyCrud;