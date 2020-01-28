const mongoose = require('../connection');

const DeliveryDate = new mongoose.Schema({
    levelValue:{type:Number},
    date:{type:Date},
    levelMessage:String

})
const delStatus= new mongoose.Schema({
deliveryId:{type:String},
maxLevel:Number,
deliveryDates:[
    DeliveryDate
]
})

module.exports={
    DelStatus:mongoose.model('DelStatus',delStatus),
    DeliveryDate:mongoose.model('DeliveryDates',DeliveryDate)
}