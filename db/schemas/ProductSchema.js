
const mongoose=require("../connection");

const Schema=mongoose.Schema;

const priceAndAmountSchema=new mongoose.Schema({
    
    amount:Number,
    suffix:String,
    price:Number,
    discount:Number,
    instock:String

})


const subProductSchema=new mongoose.Schema({
    categoryId:String,
    subcategoryId:String,
    productId:String,
    categoryName:String,
    subcategoryName:String,
    productName:String,

    subproductId:String,
    subproductName:{type:String},
    info:{
        foodPreference:String,
        isExpress:{type:Boolean,default:false},
        brand:String,
        storageAndUses:String,
        description:String,
        benefitsAndUses:String,
        priceAndAmount:[
            priceAndAmountSchema],
    },
    imageUrls:[{
        uri:String,
        key:String
    }]
});

subProductSchema.index({
    subproductName:'text',
    subproductId:'text'
})

const productSchema=new mongoose.Schema({
    productId:String,
    productName:String,
    childIds:[],
    subProducts:[
        subProductSchema
    ]
});


const subCatSchema=new mongoose.Schema({
    subcategoryId:String,
    subcategoryName:String,
    childIds:[],
    products:[
        productSchema
    ],
});

const ProductSchema=new mongoose.Schema({
    categoryId:String,
    categoryName:String,
    childIds:[],
    subcategory:[
        subCatSchema
    ],
})




module.exports={
    Products: mongoose.model("products",ProductSchema),
    SubCat: mongoose.model("subcats",subCatSchema),
    Product1: mongoose.model("pros",productSchema),
    SubProduct: mongoose.model("subproducts",subProductSchema),
    PriceAndAmount:mongoose.model("priceAndAmount",priceAndAmountSchema)

}