const cartModel=require('../schemas/cartSchema');
const OrderSchema =require('../schemas/orderDataSchema')
const customerModel = require('../schemas/customerSchema');
const orderSum = require('../../models/setterGetter/orderSum')
const config = require('../../Utils/statusconfig');
const cartPIdgen=require('../../Utils/idGenerator/cartPIdGen');
const comments = require('../../Utils/comments');
const custmodel= require('../../models/setterGetter/customer.model')
const orderModel= require('../../models/setterGetter/order.model');
const idgen = require('../../Utils/idGenerator/idGen');
const voucherCrud = require('../schemas/voucherSchema');
const DeliveryDateStatus = require('../schemas/delStatusSchema');
const   DelivLevSchema= require('../schemas/deliveryLevelSchema');
let async= require('async');
const productSchema =require('../schemas/ProductSchema');
const qs =require('querystring');
const host='localhost';
const CONSTANTS = require('../../Utils/constants');
const timeSlotCrud=require('../crudOperations/timeSlotCrud');
const SendCart= require('../../models/setterGetter/cartSend.modal');
const moment = require('moment');
const orderCrud={

getOrderAddress(id){
    return function(cb){
OrderSchema.OrderSchema.findOne({orderId:id},(err,doc)=>{
    if(err){
        return cb('DB ERROR');
    }else if(doc==null){
        return cb('No Address Found');
    }else{
        cb(null,doc.delievAddress);
    }
})
    }},


getCurrentOrders(dateobj,res){
 
OrderSchema.OrderSchema.find({placingdate:{$gte:dateobj.beginDate,$lte:dateobj.endDate},"deliverystatus.completed":{$ne:null}},(err,docs)=>{
    console.log(err,docs)
    if(err){
        res.status(409).json({status:config.ERROR,message:'DB Error'})
    }else if(docs.length==0){
        res.status(409).json({status:config.ERROR,message:'No New Order Found'});
    }else{
        res.status(200).json({status:config.SUCCESS,orders:docs});
    }
})
},

    getSingleOrder(orderid,userobj,res){
    
    OrderSchema.OrderSchema.findOne({orderId:orderid ,customerId:userobj.customerId},(err,order)=>{
     if(err){
    res.status(409).json({status:config.ERROR,message:'DB ERROR'})
    
     }else if(order==null){
    res.status(409).json({status:config.ERROR,message:'No Order Found'});

     }else{
    res.status(200).json({status:config.SUCCESS,order:order});
}

    })
    

    },
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
              //  console.log(orderArray)
                if(err) return callback(err);
                else if(orderArray.length==0){
                return callback('No Order Found')
                }else{
                   
                    callback(null,orderArray)
                }
            })
    
         }],function(err,results){
           //  console.log(results,err)
if(err){
    res.status(409).json({status:config.ERROR,message:err})
}

            else{
                res.status(200).json({status:config.SUCCESS,orders:results});
            }
         }
     )
    },


   setTimeSlot(type,dateobj,timeSlot,timeAndTypeSlot){
    for(let key in dateobj){
        dateobj[key]=timeAndTypeSlot[type].date[key];
    }

 for(let key in timeSlot){
     if(key!='date'){
     timeSlot[key]=timeAndTypeSlot[type][key];
     }
 }
 timeSlot.tsId=timeAndTypeSlot[type]._id;
 timeSlot.date={};
 timeSlot.date.Day=dateobj.Day; 
 timeSlot.date.Date=dateobj.Date; 
 timeSlot.date.MonthName=dateobj.MonthName; 
 timeSlot.date.Month=dateobj.Month; 
 timeSlot.date.Year=dateobj.Year; 
}
    ,

setDelivStatus(order,standarddelArray,expressdelArray,timeAndTypeSlot){
   // console.log(standarddelArray,expressdelArray)
    let status = new orderModel.Status();
    let expDelivery= new orderModel.ExpressDelivery();
    let stdDelivery= new orderModel.StandardDelivery();
    let pending= new orderModel.Pending();
    pending.pendingLevel=-1;
    pending.pendingMessage='Order Incomplete';
    pending.pendingStatus=true;
    if(expressdelArray.length!=0){
        expDelivery.orderId=order.orderId;
        expDelivery.type='EXP';
        expDelivery.deliveryId=idgen.idgenerator('EXP');
        let timeSlot= new orderModel.TimeSlot();
        let dateobj = new orderModel.dateobj();
       orderCrud.setTimeSlot('EXP',dateobj,timeSlot,timeAndTypeSlot);
      // console.log(timeSlot);
          expDelivery.timeSlot=timeSlot;
           expDelivery.maxLevel=CONSTANTS.DEFAULTMAXLEVEL;
for(let element of expressdelArray){
    element.deliveryId=expDelivery.deliveryId;
}
           expDelivery.orderProducts=expressdelArray;
           expDelivery.pending=pending;

       
    }
    if(standarddelArray.length!=0){
        stdDelivery.orderId=order.orderId;
        stdDelivery.type='ST';
        let timeSlot= new orderModel.TimeSlot();
        let dateobj = new orderModel.dateobj();
       orderCrud.setTimeSlot('ST',dateobj,timeSlot,timeAndTypeSlot);
    //   console.log(timeSlot);
          stdDelivery.timeSlot=timeSlot;
        stdDelivery.deliveryId=idgen.idgenerator('ST');
      stdDelivery.maxLevel=CONSTANTS.DEFAULTMAXLEVEL;;
      for(let element of standarddelArray){
        element.deliveryId=stdDelivery.deliveryId;
    }
      stdDelivery.orderProducts=standarddelArray;
      stdDelivery.pending=pending;

    }
    if(expressdelArray.length==0){
    expDelivery=null;
    }
    if(standarddelArray.length==0){
        stdDelivery=null;
    }

    status.expressStatus=expDelivery;
    status.standardStatus=stdDelivery;

return status;

}

    ,
    setdelivTime(result,order,standarddelArray,expressdelArray,timeAndTypeSlot,orderProductArray){
        for(let cartitem of result.cart){
            let orderProduct = new  orderModel.OrderProduct();
          for(let key in orderProduct){
              if(key!='timeSlot' && key!='deliveryType'){
                orderProduct[key]=cartitem[key];
              }
          }
          orderProduct.opId=idgen.idgenerator(orderProduct.subproductId);
          orderProduct.orderId=order.orderId
    
          if(timeAndTypeSlot.type=='EXP'){   
          if(cartitem.isExpress==true){
        // let timeSlot= new orderModel.TimeSlot();         //set the time slot according to express availabiliy
                                                           // and 
                                                         //timeslot and type of delivery chosen
        // let dateobj = new orderModel.dateobj();

       orderProduct.deliveryType=timeAndTypeSlot.type;
//        orderCrud.setTimeSlot('EXP',dateobj,timeSlot,timeAndTypeSlot);
//      //  console.log(timeSlot,timeAndTypeSlot)
//    //  console.log('second',timeSlot);
//          orderProduct.timeSlot=timeSlot;
         expressdelArray.push(orderProduct);
          
        }else if(cartitem.isExpress==false){
            let timeSlot= new orderModel.TimeSlot();
            // let dateobj = new orderModel.dateobj();
           orderProduct.deliveryType='ST';
        //    orderCrud.setTimeSlot('ST',dateobj,timeSlot,timeAndTypeSlot);
        // orderProduct.timeSlot=timeSlot;
        standarddelArray.push(orderProduct)
          }
        }else if(timeAndTypeSlot.type=='ST'){
            // let timeSlot= new orderModel.TimeSlot();
            // let dateobj = new orderModel.dateobj();
           orderProduct.deliveryType='ST';
        //    orderCrud.setTimeSlot('ST',dateobj,timeSlot,timeAndTypeSlot);
        // orderProduct.timeSlot=timeSlot;
        standarddelArray.push(orderProduct)
        }

         orderProductArray.push(orderProduct);
        }


    }
    ,


    addOrder(order, timeAndTypeSlot, userobj, req) {
        return function (outercallback) {
            //  console.log(timeAndTypeSlot);
            async.waterfall([
                function (callback) {
                    customerModel.Customer.findById(userobj._id, (err, customer) => {
                        if (err) return callback(err);
                        else if (customer == null) {
                            callback(comments.notUserFound);
                        } else {
                            if (customer.addressArray.length == 0 || (customer.defaultAddId == null
                                && customer.currentAddId == null)) {
                                return callback('No Address Exist');
                            } else if (customer.currentAddId == null) {
                                callback(null, customer.defaultAddId, customer)
                            } else {
                                callback(null, customer.currentAddId, customer);
                            }
                        }
                    })

                },

                function (addId, customer, callback) {
                    async.waterfall([
                        timeSlotCrud.getAvailableSlots()
                    ], (err, results) => {
                        if (err) {
                            return callback('No Delivery Possible At This Point');
                        } else {
                            let date = new Date();
                            if (timeAndTypeSlot.EXP != null) {
                                let isFound = false;
                                for (let slot of results) {
                                    if (timeAndTypeSlot.EXP.starthour == slot.starthour && timeAndTypeSlot.EXP.endhour == slot.endhour &&
                                        timeAndTypeSlot.EXP.startampm == slot.startampm && timeAndTypeSlot.EXP.endampm == slot.endampm) {
                                        if (parseInt(moment(date).format('H')) >= slot.stendhour && timeAndTypeSlot.EXP.date.Date == date.getDate() && timeAndTypeSlot.EXP.date.Month == date.getMonth() && timeAndTypeSlot.EXP.date.Year == date.getFullYear()) {
                                            return callback('Invalid Time Slot');
                                        }

                                        isFound = true;
                                        break;
                                    }
                                }
                                if (isFound == false) {
                                    return callback('We Cant Deliver to selected TimeSlot');
                                }
                            }
                            if (timeAndTypeSlot.ST != null) {
                                let isFound = false;
                                for (let slot of results) {
                                    if (timeAndTypeSlot.ST.starthour == slot.starthour && timeAndTypeSlot.ST.endhour == slot.endhour &&
                                        timeAndTypeSlot.ST.startampm == slot.startampm && timeAndTypeSlot.ST.endampm == slot.endampm) {
                                        if (parseInt(moment(date).format('H')) >= slot.stendhour && timeAndTypeSlot.ST.date.Date == date.getDate() && timeAndTypeSlot.ST.date.Month == date.getMonth() && timeAndTypeSlot.ST.date.Year == date.getFullYear()) {
                                            return callback('Invalid Time Slot');
                                        }

                                        isFound = true;
                                        break;
                                    }
                                }
                                if (isFound == false) {
                                    return callback('We Cant Deliver to selected TimeSlot');
                                }
                            }


                            callback(null, addId, customer);

                        }
                    })

                },
                function (addId, customer, callback) {
                    cartModel.find({ 'customerId': customer.customerId }, (err, cartArray) => {
                        if (err) return callback(err);
                        else if (cartArray.length == 0) {
                            return callback('Empty Cart');
                        } else {
                            let eligibleCartArray = [];
                            let ineligibleCartArray = [];
                            async.each(cartArray, (cartelement, cbinner) => {
                                productSchema.SubProduct.findOne({ subproductId: cartelement.subproductId }, (err, doc) => {
                                    if (err) {
                                        return cbinner('DB Error');
                                    } else if (doc == null) {
                                        return cbinner('No Product Found');
                                    } else {
                                        // console.log(cartelement);
                                        let sendcartproduct = new SendCart();
                                        for (let amtprice of doc.info.priceAndAmount) {
                                            //  console.log(amtprice);
                                            if (amtprice.amount == cartelement.amount && amtprice.suffix == cartelement.suffix) {
                                                //  console.log('here');
                                                sendcartproduct.amount = amtprice.amount;
                                                sendcartproduct.suffix = amtprice.suffix;
                                                sendcartproduct.costprice = parseFloat(amtprice.price);
                                                sendcartproduct.sellprice = parseFloat((parseFloat(amtprice.price) - (0.01 * parseInt(amtprice.discount) * parseFloat(amtprice.price))).toFixed(2));
                                                sendcartproduct.subTotal = parseFloat(sendcartproduct.sellprice * cartelement.quantity);
                                                sendcartproduct.cartProductId = cartelement.cartProductId;
                                                sendcartproduct.customerId = cartelement.customerId;
                                                sendcartproduct.isExpress = doc.info.isExpress;
                                                sendcartproduct.categoryId = doc.categoryId;
                                                sendcartproduct.categoryName = doc.categoryName;
                                                sendcartproduct.imageUrl = doc.imageUrls[0];
                                                sendcartproduct.subproductId = doc.subproductId;
                                                sendcartproduct.subproductName = doc.subproductName;
                                                sendcartproduct.brand = doc.info.brand;
                                                sendcartproduct.quantity = cartelement.quantity;

                                                if (amtprice.instock == 'true') {
                                                    eligibleCartArray.push(sendcartproduct);
                                                    break;
                                                } else {
                                                    ineligibleCartArray.push(sendcartproduct);
                                                    break;
                                                }
                                            }
                                        }
                                        cbinner();

                                    }
                                })

                            }, (err) => {
                                if (err) {

                                    callback(err);

                                } else {
                                    //  console.log(eligibleCartArray,'and',ineligibleCartArray);
                                    callback(null, {
                                        'cart': eligibleCartArray,
                                        'ineligibleCartArray': ineligibleCartArray, 'addId': addId, 'customer': customer
                                    });
                                }

                            })

                        }
                    })

                }, function (result, callback) {

                    let orderProductArray = [];
                    let standarddelArray = [];
                    let expressdelArray = [];
                    orderCrud.setdelivTime(result, order, standarddelArray, expressdelArray, timeAndTypeSlot, orderProductArray);

                    if (orderProductArray.length == 0) {
                        return callback('Error Ocurred')
                    }
                    else {

                        order.deliverystatus = orderCrud.setDelivStatus(order, standarddelArray, expressdelArray, timeAndTypeSlot);
                        async.series([
                            function (cb) {
                                if (order.deliverystatus.standardStatus != null) {
                                    OrderSchema.StandardDelivery.create(order.deliverystatus.standardStatus,
                                        (err, doc) => {
                                            if (err) {
                                                return cb('error');
                                            } else {

                                                DelivLevSchema.Deliverylevel.findOne(
                                                    { maxLevel: order.deliverystatus.standardStatus.maxLevel },
                                                    (err, deldata) => {
                                                        if (err) {
                                                            cb('DB Error');
                                                        } else if (deldata == null) {
                                                            cb('No Crud Found');
                                                        } else {
                                                            let dateArray = [];

                                                            for (let i = 0; i < deldata.maxLevel; i++) {
                                                                let datevalue = null;
                                                                if (i == 0) {
                                                                    datevalue = order.placingdate;
                                                                }
                                                                let dateLevel = new DeliveryDateStatus.DeliveryDate({
                                                                    levelValue: deldata.levels[i].levelIndex,
                                                                    date: datevalue,
                                                                    levelMessage: deldata.levels[i].levelMessage
                                                                })
                                                                dateArray.push(dateLevel)
                                                            }


                                                            let DelDateStatus = new DeliveryDateStatus.DelStatus({
                                                                deliveryId: doc.deliveryId,
                                                                deliveryDates: dateArray,
                                                                maxLevel: CONSTANTS.DEFAULTMAXLEVEL
                                                            })

                                                            console.log(DelDateStatus);

                                                            DelDateStatus.save((err) => {
                                                                if (err) {
                                                                    return cb('Error');
                                                                } else {
                                                                    order.deliverystatus.standardStatus = doc.deliveryId;
                                                                    console.log('here');
                                                                    cb(null, doc);
                                                                }
                                                            })


                                                        }
                                                    })




                                            }
                                        })
                                } else {

                                    cb(null, null);
                                }
                            },
                            function (cb) {
                                if (order.deliverystatus.expressStatus != null) {
                                    OrderSchema.ExpressDelivery.create(order.deliverystatus.expressStatus,
                                        (err, doc2) => {
                                            if (err) {
                                                return cb('error');
                                            } else {
                                                DelivLevSchema.Deliverylevel.findOne(
                                                    { maxLevel: order.deliverystatus.expressStatus.maxLevel },
                                                    (err, deldata) => {
                                                        if (err) {
                                                            cb('DB Error');
                                                        } else if (deldata == null) {
                                                            cb('No Crud Found');
                                                        } else {
                                                            let dateArray = [];

                                                            for (let i = 0; i < deldata.maxLevel; i++) {
                                                                let datevalue = null;
                                                                if (i == 0) {
                                                                    datevalue = order.placingdate;
                                                                }
                                                                let dateLevel = new DeliveryDateStatus.DeliveryDate({
                                                                    levelValue: deldata.levels[i].levelIndex,
                                                                    date: datevalue,
                                                                    levelMessage: deldata.levels[i].levelMessage
                                                                })
                                                                dateArray.push(dateLevel)
                                                            }


                                                            let DelDateStatus = new DeliveryDateStatus.DelStatus({
                                                                deliveryId: doc2.deliveryId,
                                                                maxLevel: CONSTANTS.DEFAULTMAXLEVEL,
                                                                deliveryDates: dateArray
                                                            })


                                                            DelDateStatus.save((err) => {
                                                                if (err) {
                                                                    return cb('Error');
                                                                } else {
                                                                    order.deliverystatus.expressStatus = doc2.deliveryId;
                                                                    cb(null, doc2);
                                                                    console.log('here');
                                                                }
                                                            })

                                                        }
                                                    })





                                            }
                                        })
                                } else {
                                    cb(null, null)
                                }
                            }

                        ], function (err, results) {
                            if (err) {
                                callback(err);
                            } else {
                                console.log('address');
                                order.customerId = result.customer.customerId;
                                for (let address of result.customer.addressArray) {
                                    if (address.addId == result.addId) {
                                        let addressobj = new custmodel.address();
                                        for (let key in addressobj) {
                                            addressobj[key] = address[key]
                                        }
                                        order.delievAddress = addressobj;

                                    }
                                }
                                console.log(order);

                                if (order.delievAddress == null || order.delievAddress.addId == null) {
                                    return callback('No Address Found');
                                }

                                else {
                                    console.log(order)
                                    req.address = order.delievAddress;
                                    order.deliverystatus.completed = null;
                                    callback(null, result);
                                }
                            }
                        })
                    }
                }
                , function (result, callback) {

                    //  console.log(order);
                    OrderSchema.OrderSchema.create(order, (err, doc) => {
                        if (err) {
                            // console.log(err);
                            return callback('DB Error');

                        }
                        else {
                            let setCustOrder = customerModel.Order({
                                'orderId': order.orderId,
                                'completed': null
                            })


                            customerModel.Customer.findOneAndUpdate({ customerId: result.customer.customerId },
                                { $push: { orders: setCustOrder }, $set: { currentAddId: null } },
                                { new: true }, (err, cust) => {
                                    if (err) {
                                        return callback('DB ERROR');
                                    } else if (cust != null) {
                                        callback(null, doc);
                                    } else {
                                        return callback('Unknown Error Occurred');
                                    }
                                })
                        }

                    })


                }
            ], function (err, result) {
                if (err) {
                    return outercallback(err);

                } else {
                    //  console.log(result);
                    outercallback(null, true)

                }
            })
        }
    }
    // result now equals 'done'
    ,
    setOrderAfterPayment(Params, res) {

        // console.log(paytmParams);
        return function (outercb) {
            OrderSchema.OrderSchema.findOneAndUpdate({ orderId: Params.ORDERID }, { $set: { transactionId: Params.TXNID, "deliverystatus.completed": false, paymentMethod: Params.PAYMENTMODE } }, (err, doc) => {
                if (err) {
                    res.status(409).json({ status: config.ERROR, message: 'DB ERROR' })
                } else if (doc == null) {
                    res.status(409).json({ status: config.ERROR, message: 'No Order Found' })
                }
                else {

                    async.parallel([
                        function (innercb) {
                            if (doc.deliverystatus.standardStatus != null) {
                                OrderSchema.StandardDelivery.findOneAndUpdate({ deliveryId: doc.deliverystatus.standardStatus },
                                    { $set: { "pending.pendingMessage": "Order Recieved", "pending.pendingLevel": 0 } }, (err, sddoc) => {
                                        if (err) {
                                            return innercb('DB Error');
                                        } else if (sddoc == null) {
                                            return innercb('No Delivery Order Found');
                                        } else {
                                            innercb(null, sddoc);
                                        }
                                    })
                            } else {
                                innercb(null, null)
                            }
                        }, function (innercb) {
                            if (doc.deliverystatus.expressStatus != null) {
                                OrderSchema.ExpressDelivery.findOneAndUpdate({ deliveryId: doc.deliverystatus.expressStatus },
                                    { $set: { "pending.pendingMessage": "Order Recieved", "pending.pendingLevel": 0 } }, (err, sddoc) => {
                                        if (err) {
                                            return innercb('DB Error');
                                        } else if (sddoc == null) {
                                            return innercb('No Delivery Order Found');
                                        } else {
                                            innercb(null, sddoc);
                                        }
                                    })
                            } else {
                                innercb(null, null);
                            }
                        }, function (innercb) {
                            //  console.log(doc);
                            customerModel.Customer.findOneAndUpdate({ customerId: doc.customerId, "orders.orderId": doc.orderId },
                                { $set: { "orders.$.completed": false } }, (err, sddoc) => {
                                    if (err) {
                                        return innercb('DB Error');
                                    } else if (sddoc == null) {
                                        return innercb('No Order Found');
                                    } else {
                                        innercb(null, sddoc);
                                    }
                                })

                        }, function (innercb) {

                            cartModel.deleteMany({ customerId: doc.customerId }, (err) => {
                                if (err) {
                                    return innercb('DB Error');
                                } else {
                                    innercb(null, null);
                                }
                            })

                        }
                    ]
                        , function (err, results) {
                            if (err) {
                                outercb(err);
                            } else {
                                const query = qs.stringify({
                                    "id": Params.ORDERID
                                });
                                // conole.log(query);
                                outercb(null, query);
                            }
                        })

                }

            })
        }
    }
    ,

    checkVoucherData(voucherCode) {
        return function (cb) {
            if (voucherCode != null) {
                voucherCrud.findOne({ "allVouchers.voucherCode": voucherCode }, { 'allVouchers.$': 1 }, (err, res) => {
                    if (err) return cb('DB Error');
                    else if (res == null) {
                        cb(null, null);
                    } else {
                        cb(null, res);
                    }
                })
            } else {
                cb(null, null);
            }
        }
    },

    getCartData(userobj) {
        return function (cb) {
            cartModel.find({ 'customerId': userobj.customerId }, (err, cart) => {
                if (err) {
                    cb('DB Error');

                } else if (cart.length == 0) {
                    cb('Empty Cart');
                }
                else {
                    let eligibleCartArray = [];
                    let ineligibleCartArray = [];
                    async.each(cart, (cartelement, cbinner) => {
                        productSchema.SubProduct.findOne({ subproductId: cartelement.subproductId }, (err, doc) => {
                            if (err) {
                                return cbinner('DB Error');
                            } else if (doc == null) {
                                return cbinner('No Product Found');
                            } else {
                                // console.log(cartelement);
                                let sendcartproduct = new SendCart();
                                for (let amtprice of doc.info.priceAndAmount) {
                                    //  console.log(amtprice);
                                    if (amtprice.amount == cartelement.amount && amtprice.suffix == cartelement.suffix) {
                                        //  console.log('here');
                                        sendcartproduct.amount = amtprice.amount;
                                        sendcartproduct.suffix = amtprice.suffix;
                                        sendcartproduct.costprice = parseFloat(amtprice.price);
                                        sendcartproduct.sellprice = parseFloat((parseFloat(amtprice.price) - (0.01 * parseInt(amtprice.discount) * parseFloat(amtprice.price))).toFixed(2));
                                        sendcartproduct.subTotal = parseFloat(sendcartproduct.sellprice * cartelement.quantity);
                                        sendcartproduct.cartProductId = cartelement.cartProductId;
                                        sendcartproduct.customerId = cartelement.customerId;
                                        sendcartproduct.isExpress = doc.info.isExpress;
                                        sendcartproduct.categoryId = doc.categoryId;
                                        sendcartproduct.categoryName = doc.categoryName;
                                        sendcartproduct.imageUrl = doc.imageUrls[0];
                                        sendcartproduct.subproductId = doc.subproductId;
                                        sendcartproduct.subproductName = doc.subproductName;
                                        sendcartproduct.brand = doc.info.brand;
                                        sendcartproduct.quantity = cartelement.quantity;

                                        if (amtprice.instock == 'true') {
                                            eligibleCartArray.push(sendcartproduct);
                                            break;
                                        } else {
                                            ineligibleCartArray.push(sendcartproduct);
                                            break;
                                        }
                                    }
                                }
                                cbinner();

                            }
                        })

                    }, (err) => {
                        if (err) {

                            cb(err);

                        } else {
                            //  console.log(eligibleCartArray,'and',ineligibleCartArray);
                            cb(null, {
                                'cartArray': eligibleCartArray,
                                'ineligibleCartArray': ineligibleCartArray
                            });
                        }

                    })
                }
            })
        }
    }
    ,
    getAllVouchers(res) {
        voucherCrud.find({}, { allVouchers: 1 }, (err, vouchers) => {
            if (err) {
                res.status(409).json({ status: config.ERROR, message: 'DB Error' });
            } else if (vouchers.length == 0) {
                res.status(409).json({ status: config.ERROR, message: 'No Vouchers Present' });
            } else {
                res.status(200).json({ status: config.SUCCESS, vouchers: vouchers });
            }
        })
    }
    ,
    orderSum(userobj, voucherCode, res) {
        //   console.log(voucherCode);
        async.parallel([
            orderCrud.getCartData(userobj),
            orderCrud.checkVoucherData(voucherCode),
        ], function (err, results) {
            // console.log(results);
            if (err) {

                res.status(409).json({ status: config.ERROR, message: err })
            } else {
                let voucherDis = null;
                let cartArray = results[0].cartArray;
                let ordersum = new orderSum();

                for (let cartitem of cartArray) {
                    ordersum.basketValue += cartitem.subTotal;
                    ordersum.totalSavings += parseFloat((cartitem.costprice - cartitem.sellprice) * cartitem.quantity);
                }
                ordersum.totalAmountToPay = ordersum.basketValue;
                if (ordersum.basketValue > 100) {
                    if (results[1] != null) {

                        if (results[1].allVouchers[0].isPercent == 'true') {
                            voucherDis = parseFloat(ordersum.basketValue * parseFloat(results[1].allVouchers[0].voucherDiscount) * 0.01).toFixed(2);
                            ordersum.totalAmountToPay = ordersum.basketValue - parseFloat(ordersum.basketValue * parseFloat(results[1].allVouchers[0].voucherDiscount) * 0.01);
                            ordersum.totalSavings = ordersum.totalSavings + (parseInt(ordersum.basketValue * parseFloat(results[1].allVouchers[0].voucherDiscount) * 0.01));
                        } else if (results[1].allVouchers[0].isPercent == 'false') {
                            voucherDis = results[1].allVouchers[0].voucherDiscount;
                            ordersum.totalAmountToPay = ordersum.basketValue - parseFloat(results[1].allVouchers[0].voucherDiscount);
                            ordersum.totalSavings = ordersum.totalSavings + parseFloat(results[1].allVouchers[0].voucherDiscount);
                        }

                    }
                    ordersum.deliveryCharges = 0;
                }
                ordersum.totalAmountToPay = ordersum.totalAmountToPay + ordersum.deliveryCharges;
                //   console.log(ordersum);
                res.status(200).json({
                    status: config.SUCCESS, 'orderSum': ordersum, cartArray: cartArray,
                    'ineligibleCartArray': results[0].ineligibleCartArray,
                    voucherDiscount: voucherDis, voucherApplied: results[1]
                })

            }
        })

    },

    completeOrder(data) {
        return function (cb) {
            OrderSchema.OrderSchema.findOneAndUpdate({ orderId: data.orderId }, { $set: { "deliverystatus.completed": true } }, { new: true }, (err, doc) => {
                if (err) {
                    return cb('DB Error');
                } else if (doc == null) {
                    return cb('No Order Found');
                } else {
                    cb(null, doc)
                }
            })
        }

    }

}

module.exports = orderCrud;