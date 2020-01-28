const mongoose= require('../connection');
const Schema=mongoose.Schema;

const RoleSchema = new Schema({
    roleId:String,
    roleDesc:String,
    roleName:String,
    active:{type:Boolean,default:false}
})

module.exports=mongoose.model('roles',RoleSchema);