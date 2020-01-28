const mongoose = require('../connection');

const VendorDelDateSchema = new mongoose.Schema({
deliveryId:String,
vendorId:String,
level:Number,
date:{type:Date}


})


module.exports= mongoose.model('vendorDelDates',VendorDelDateSchema);