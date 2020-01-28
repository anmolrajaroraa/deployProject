const express=require('express');
const ProductRoutes=express.Router();
const productCrud = require('../../db/crudOperations/Product');
//milan
ProductRoutes.get('/getProducts',(req,res)=>{
            //nullChecker.check(req.body.products,res);
            productCrud.getProducts(req,res);
})

ProductRoutes.post('/searchquery',(req,res)=>{

    productCrud.filteredSearch(res,req.body)
})

ProductRoutes.post('/getSubProducts',(req,res)=>{
    productCrud.getSubproduct(req.body.id,res);
})

     
module.exports=ProductRoutes;
    