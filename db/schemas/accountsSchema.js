const mongoose = require('../connection');

const Accounts= new mongoose.Schema({
  empId:{type:String},
  type:{type:String},
  delprice:{type:Number},
   date:{type:Date,required:true},
   deliveryId:{type:String,required:true},
   paid:{type:Boolean,default:false}

})

module.exports ={
    AccountsSchema:mongoose.model(
        'accounts',Accounts
    )
}