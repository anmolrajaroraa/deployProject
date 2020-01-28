//const mongoose=require("mongoose");
const mongoose=require("../connection");

const Schema=mongoose.Schema;

const adminLogin=new Schema({
    id:String,
    name:String,
    password:String,
    activestatus:{type:Boolean,
        default:false
        }
})


module.exports=mongoose.model("admin",adminLogin,'admin');