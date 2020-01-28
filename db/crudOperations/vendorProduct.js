const Products=require('../schemas/vendorSchema');
const stringCompare = require('../../Utils/stringCompare');
const categorylist = require('../schemas/ProductSchema');
 const productSchema = require('../schemas/ProductSchema');
 const config = require('../../Utils/statusconfig');
const vendorProductCrud={
    
    searchProduct(productname,res){
   
         productSchema.SubProduct.find({$text:{$search:productname}},(err,doc)=>{
            if(err){
              //  console.log(err);
                res.status(409).json({status:config.ERROR,message:'DB Error'});
            }else if(doc.length==0){
                res.status(409).json({status:config.EMPTY,message:'No Product Found'});
            }else{
                res.status(200).json({status:config.SUCCESS,subproducts:doc});
            }
         })
            },

    uploadProducts(req,res,obj){
        Products.create(obj,function(err){
            if(err){
                console.log('some error occures');
            }
        })
    },

}

module.exports=vendorProductCrud;