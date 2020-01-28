
const mongoose=require("../connection");

var Schema=mongoose.Schema;
const product= new Schema({
    subproductId:String
})

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

const vendorSchema=new Schema({
    id:{type:String},
    name:{type:String},
    pin_code:String,
    location:{
        type:pointSchema,
        required:true
    },
      sellproducts:[
          product],
      isloggedOnce:Boolean,
      isAvail:{type:Boolean},
      verified:Boolean
})


module.exports=mongoose.model("vendors",vendorSchema);