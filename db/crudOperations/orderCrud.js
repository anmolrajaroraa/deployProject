const cartModel=require('../schemas/cartSchema');
const OrderSchema =require('../schemas/orderSchema')
const customerModel = require('../schemas/customerSchema');
const orderSum = require('../../models/setterGetter/orderSum')
const config = require('../../Utils/statusconfig');
const cartPIdgen=require('../../Utils/idGenerator/cartPIdGen');
const comments = require('../../Utils/comments');
const custmodel= require('../../models/setterGetter/customer.model')
const orderModel= require('../../models/setterGetter/order.model');
let async= require('async');
const orderCrud={
    getOrder(userobj,completed,res){
     async.waterfall([
         function(callback){
    customerModel.Customer.findOne({_id:userobj._id},{'orders':1},(err,order)=>{
        if(err){
           return callback(err);
        }else if(order==null){
           return callback(err);
        }else{
         
            callback(null,order.orders)
        }
    })
         },function(order,callback){
           
             let orderArray=[];
            async.each(order,function(orderobj,callback2){
                if(orderobj.completed==completed){
                  OrderSchema.OrderSchema.findOne({'orderId':orderobj.orderId},(err,doc)=>{
                   
                   if(err) return callback2(err);
                
               else if(doc!=null){
                    orderArray.push(doc);
                 }
                 callback2();
               })}
            },function(err){
                console.log(orderArray)
                if(err) return callback(err);
                else if(orderArray.length==0){
                 callback('No Order Found')
                }else{
                   
                    callback(null,orderArray)
                }
            })
    
         }],function(err,results){
             console.log(results,err)
if(err){
    res.status(409).json({status:config.ERROR,message:err})
}

            else{
                res.status(200).json({status:config.SUCCESS,orders:results});
            }
         }
     )
    },

    addOrder(order,userobj,res){
        async.waterfall([
            function(callback) {
                customerModel.Customer.findById(userobj._id,(err,customer)=>{
                 if(err) return callback(err);
                 else if(customer==null){
                 callback(comments.notUserFound);
                }else {
                    if(customer.addressArray.length==0 && customer.defaultAddId==null && customer.currentAddId==null){
                        callback('No Address Exist');
                    }else if(customer.currentAddId==null){
                    callback(null,customer.defaultAddId,customer)
                }else{
                    callback(null,customer.currentAddId,customer);
                }
                }
                })
                
            },
            function(addId, customer, callback) {
              cartModel.find({'customerId':customer.customerId},(err,cartArray)=>{
                  if(err) return callback(err);
                  else if(cartArray.length==0){
                      callback('Empty Cart');
                  }else{
                      callback(null,{'addId':addId,'customer':customer,'cart':cartArray})
                  }
              })
             
            }
        ], function (err, result) {
            if(err){
                res.status(409).json({status:config.ERROR,message:err})

            }else{
                let orderProductArray=[];
                for(let cartitem of result.cart){
                    let orderProduct = new  orderModel.OrderProduct();
                  for(let key in orderProduct){
                      orderProduct[key]=cartitem[key];
                  }
                  orderProductArray.push(orderProduct);
                }
               
                if(orderProductArray.length==0){
                    res.status(409).json({status:config.ERROR,message:'Error Ocurred'})

                }else{
                  order.orderedProducts=orderProductArray;
                  order.customerId=result.customer.customerId;
                  
                  for(let address of result.customer.addressArray){
                      if(address.addId==result.addId){
                          let addressobj = new custmodel.address();
                         for(let key in addressobj){
                             addressobj[key]=address[key]
                         }
                         order.delievAddress=addressobj;
                        
                      }
                  }
                  if(order.delievAddress.addId==null){
                    res.status(409).json({status:config.ERROR,message:'No Address Found'})

                  }else{
                      let status = new orderModel.Status();
                      status.completed=false;
                      status.pending.pending=true;
                      status.pending.pendingStatus='Order Placed';
                      order.status=status;
                    
                      OrderSchema.OrderSchema.create(order,(err,doc)=>{
                          if(err){
                            res.status(409).json({status:config.ERROR,message:err})

                          }else{
                      let setCustOrder=customerModel.Order({
                          'orderId':order.orderId,
                          'completed':false
                      })

                      customerModel.Customer.findOneAndUpdate({customerId:result.customer.customerId},{$push:{orders:setCustOrder},$set:{currentAddId:null}},{new:true},(err,cust)=>{
                          if(err) {
                              res.status(409).json({status:config.ERROR,message:err});
                          }else if(cust!=null){     
                            res.status(200).json({status:config.SUCCESS,isPushed:true,order:doc});
                          }else{
                              res.status(409).json({status:config.ERROR,message:'Unknown Error Occurred'});
                          }
                      })
                          }

                      })
                      
                  }

                }
            }
            // result now equals 'done'
        });
 

    },

    orderSum(userobj,res){     
       
            cartModel.find({customerId:userobj.customerId},(err,cartArray)=>{
                if(err){
                res.status(409).json({status:config.ERROR,message:err})
                    
                }else if(cartArray.length==0){

                res.status(409).json({status:config.ERROR,message:'Empty Cart'})

                   }else{

                    let ordersum = new orderSum();
                  
                    for(let cartitem of cartArray){
                       ordersum.basketValue+=cartitem.subTotal;
                       ordersum.totalSavings+=parseFloat(((cartitem.costprice-cartitem.sellprice)*cartitem.quantity).toFixed(2));
                    }
                    if(ordersum.basketValue>1000){
                        ordersum.deliveryCharges=0;
                    }
                    ordersum.totalAmountToPay=ordersum.basketValue+ordersum.deliveryCharges;
                  //  console.log(ordersum);
               res.status(200).json({status:config.SUCCESS,'orderSum':ordersum ,cartArray:cartArray})
                }
                })
    
        }
   
}

module.exports= orderCrud;