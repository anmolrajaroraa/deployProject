const jointOrderCrud=require('../../db/schemas/orderJointSchema');
const config=require('../statusconfig');
function checkOrderConfirmStatus(req,res,next){
    let vendor=req.body.delobj;
jointOrderCrud.joinOrderSchema.findOne({vendorId:vendor.vendorId,deliveryId:vendor.deliveryId,isReady:true},(err,doc)=>{
    if(err){
res.status(409).json({status:config.ERROR,message:'DB Error'});
    }else if(doc==null){
        next();
    }else{
        res.status(409).json({status:config.ERROR,message:'Already Confirmed Order'});
     
    }
})



}

module.exports=checkOrderConfirmStatus;