const mongoose = require('../connection');

const delBoyDelDateSchema = new mongoose.Schema({
deliveryId:String,
delboyId:String,
level:Number,
date:{type:Date}


})


module.exports= mongoose.model('delBoyDelDates',delBoyDelDateSchema);