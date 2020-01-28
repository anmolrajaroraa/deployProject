const mongoose = require('../connection');

const dateobj= new mongoose.Schema({
    Day:String,
    Date:Number,
    MonthName:String,
    Month:Number,
    Year:Number
})

const TimeSlot= new mongoose.Schema({
    tsId:String,
    starthour:Number,
    endhour:Number,
    startmin:Number,
    endmin:Number,
    startampm:String,
    endampm:String,
    date:dateobj
})
const OrderedProducts= new mongoose.Schema({
    opId:String,
    brand:String,
    subproductId:String,
    subproductName:String,
    sellprice:Number,
    amount:Number,
    suffix:String,
    quantity:Number,
    subTotal:Number,
    deliveryType:String,
    deliveryId:String,
    orderId:String,
    imageUrl:{
        uri:{type:String},
        key:{type:String}
    }
})
const GiftMessage=new mongoose.Schema({
    
     senderName:String,
     recieverName:String,
     message:String
 })
const Address = new mongoose.Schema({
    type:String,
    addId:String,
    house_no:String,
    fulladdress:String,
    area:String,
    city:String,
    pincode:String,
    mobile_no:String,
})

const pending= new mongoose.Schema({
  
        pendingStatus:Boolean,
        pendingMessage:String,
        pendingLevel:Number
    
})

const StandardDelivery= new mongoose.Schema({
    type:{type:String,default:'ST'},
    deliveryId:String,
    orderId:String,
    pending:pending,
    isVendorAlloted:Boolean,
    maxLevel:Number,
    timeSlot:TimeSlot,
    orderProducts:[
     OrderedProducts
    ]
})

const ExpressDelivery= new mongoose.Schema({
    type:{type:String,default:'EXP'},
    deliveryId:String, 
    orderId:String,
    pending:pending,
    isVendorAlloted:Boolean,
    maxLevel:Number,
    timeSlot:TimeSlot,
    orderProducts:[
      OrderedProducts
    ]
})

const status= new mongoose.Schema({
  standardStatus:String,
  expressStatus:String,
completed:Boolean
})


const OrderSchema= new mongoose.Schema({
    giftMessage:GiftMessage,
    orderId:String,
    placingdate:{type:Date,default:Date.now()},
    delievAddress:{type:Address},
    transactionId:{type:String},
    deliverystatus:status,
    payment:{type:String},
    customerId:{type:String,required:true},
    paymentMethod:{type:String}
    
   

})

module.exports={
    OrderSchema: mongoose.model("orders",OrderSchema),
    OrderedProducts:mongoose.model("orderedProducts",OrderedProducts),
    GiftMessage:mongoose.model('giftMessages',GiftMessage),
    StandardDelivery:mongoose.model('StandardDeliveries',StandardDelivery),
    ExpressDelivery:mongoose.model('ExpressDeliveries',ExpressDelivery),
}