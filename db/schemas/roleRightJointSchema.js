const mongoose= require('../connection');
const Schema=mongoose.Schema;

const RoleRightJointSchema = new Schema({
    roleId:String,
  rightId:String
})

module.exports=mongoose.model('roleRightMap',RoleRightJointSchema);