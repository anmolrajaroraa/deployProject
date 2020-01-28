const mongoose=require("../connection");

const Schema=mongoose.Schema;

const datestatus = new Schema({
    allotedDate:{type:Date},
    isAlloted:Boolean
})
const allotStatus = new Schema({
    vendorAllotStatus:datestatus,
})
const joinOrderSchema = new Schema({
    vendorId:String,
    vendorsellDelProducts:[
     {type:String}
    ],
    vendorAllowProducts:[
        {type:String}
    ],
    vendorOrderPrice:Number,
    deliveryId:String,
    type:String,
    allotStatus:allotStatus,
    orderId:String,
    pending:Boolean,
    deliveryBoyId:String,
    isReady:Boolean
})


module.exports ={
   joinOrderSchema: mongoose.model('ordervendordelboyjoints',joinOrderSchema),
   datestatus:mongoose.model('datestatus',datestatus),
   allotStatus:mongoose.model('allotstatus',allotStatus)
} 