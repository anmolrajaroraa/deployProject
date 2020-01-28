const mongoose = require('../connection');
const adminRoleMap = mongoose.Schema;
const adRoleMap = new adminRoleMap({
    id:{type:String},
    roleId:{type:String}
});
const AdminRoleMap = mongoose.model('adminrolemaps',adRoleMap);
module.exports=AdminRoleMap;