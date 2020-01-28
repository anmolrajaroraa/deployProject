const AccountSchema = require('../schemas/accountsSchema');
const config = require('../../Utils/statusconfig');
const comments = require('../../Utils/comments');
const idgen = require('../../Utils/idGenerator/idGen');
let async= require('async');
const deljointSchema = require('../schemas/orderJointSchema');

const AccountCrud={

checkPreExistingAccount(obj){
    return function(cb){
    AccountSchema.AccountsSchema.findOne({deliveryId:obj.deliveryId,empId:obj.id,delprice:obj.vendorOrderPrice},(err,doc)=>{
        if(err){
            return cb('DB Error');
        }else if(doc!=null){
   return cb('Invalid Entry');
        }else{
return cb(null,true);
        }}) 
    }
},
addAccountData(obj){
    return function(info,cb){
     //   console.log(info,obj);
         let accountObj=new AccountSchema.AccountsSchema({
                    empId:obj.id,
                    type:obj.empType,
                    date:info.date,
                    delprice:obj.vendorOrderPrice,
                    deliveryId:obj.deliveryId
                     })
                     accountObj.save(err=>{
                         if(err){
                             return cb('DB Error');
                         }else{
                             cb(null,info);
                         }
                     })
            }
    },

    getUnpaidVendorsAccount(dateobj){
return function(cb){
AccountSchema.AccountsSchema.find({type:'Vendor',date:{$gte:dateobj.beginDate,$lte:dateobj.endDate},paid:false},
(err,docs)=>{
    if(err){
        return cb('DB Error');
    }else if(docs.length==0){
        return cb('No Unpaid Vendor');
    }else{
        cb(null,docs);
    }
})
}
    },


    getUnpaidDelBoyAccount(dateobj){
        return function(cb){
        AccountSchema.AccountsSchema.find({type:'DeliveryBoy',date:{$gte:dateobj.beginDate,$lte:dateobj.endDate},
        paid:false},(err,docs)=>{
            if(err){
                return cb('DB Error');
            }else if(docs.length==0){
                return cb('No Unpaid Delivery Boy');
            }else{
                cb(null,docs);
            }
        })
        }
            },
        
setPayStatus(obj){
return function(cb)
{
    AccountSchema.AccountsSchema.findOneAndUpdate({empId:obj.empId,deliveryId:obj.deliveryId,
        date:obj.date,type:obj.type},{paid:obj.paid},{new:true},(err,doc)=>{
        if(err){
            return cb('DB Error');
        }else if(doc==null){
            return cb('No Employee Found');
        }else{
            return cb(null,doc);
        }
    })
}}
    }
module.exports=AccountCrud;