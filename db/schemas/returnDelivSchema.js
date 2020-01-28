const mongoose=require("../connection");

const Schema=mongoose.Schema;

const returnOrderSchema = new Schema({
    vendorAvailProducts:[
     {type:String}
    ],
    deliveryId:String,
    type:String,
    orderId:String,
    pending:Boolean,
    
})

module.exports = {
    returnOrderSchema:mongoose.model('vendorUnAcceptedOrders',returnOrderSchema)
};