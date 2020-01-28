const async=require('async');
const accountCrud=require('../../db/crudOperations/accountsCrud');
const config= require('../statusconfig')
function checkAccount(req,res,next) {
    let obj = req.body.delobj
    try{
    async.waterfall([
        accountCrud.checkPreExistingAccount(obj)
    ],(err)=>{
        console.log(err);
        if(err){
            res.status(500).json({"status":config.ERROR,"message":err});
        }else{
            next();
        }
    })
    }
    catch(err) {
          res.status(500).json({"status":config.ERROR,"message":err});
        }
}
module.exports=checkAccount;