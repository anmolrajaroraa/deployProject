const mongoose = require('../connection');

const TimeSlotSchema = new mongoose.Schema({
 
starthour:Number,
    endhour:Number,
    startmin:Number,
    endmin:Number,
    startampm:String,
    endampm:String,
    ststarthour:Number,
    stendhour:Number,
    isAvail:Boolean
})

module.exports={
   TimeSlot:mongoose.model('timeSlots',TimeSlotSchema)
} 