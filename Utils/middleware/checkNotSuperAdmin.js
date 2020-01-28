const roleSchema=require('../../db/schemas/roleSchema');
const config= require('../../Utils/statusconfig');
function checkNotSuperAdmin(req,res,next){
if(req.body.roleName=='SuperAdmin'){
    res.status(409).json({status:config.ERROR,message:"Can not override Super Admin"});
}else{
    next();
}
}

module.exports=checkNotSuperAdmin;