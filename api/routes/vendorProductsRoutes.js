//--milan
const express=require('express');
const vendorproductRoutes=express.Router();
const productCrud=require('../../db/crudOperations/vendorProduct'); 

vendorproductRoutes.get('/searchProduct',(req,res)=>{
      productCrud.searchProduct(req.query.sp,res);

})



module.exports=vendorproductRoutes;