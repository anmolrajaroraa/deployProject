const config= require('../statusconfig');
const qs = require('querystring');
const port = 1234;
const checksum_lib =require("../checksum/checksum");
const orderCrud=require('../../db/schemas/orderDataSchema');
const async = require('async');
var PaytmConfig = {
	mid: "uftYzo54593302843091",
	key: "DpG&d9608PZK6nBL",
	website: "JUSTMYNEED"
}

function checkPaytm(req,userobj,infoObj) {
    console.log(req.url);
switch(req.url){
    case "/order/placeOrder":
        var params 						= {};
        params['MID'] 					= PaytmConfig.mid;
        params["WEBSITE"]               = "JUSTMYNEED",
        params['CHANNEL_ID']			= 'WEB';
        params['INDUSTRY_TYPE_ID']	= 'Retail';
        params['ORDER_ID']			= (infoObj.orderId).toString();
        params['CUST_ID'] 			= userobj.customerId;
        params['TXN_AMOUNT']			= (infoObj.payment).toString();
        params['CALLBACK_URL']		= (infoObj.cburl).toString();
        params['EMAIL']				= 'justmyneed.com';
        params['MOBILE_NO']			= (infoObj.mobile_no).toString();
  console.log('here');
 let pr = new Promise((resolve,reject)=>{
    checksum_lib.genchecksum(params, PaytmConfig.key,function(err,checksum){

        if(checksum!=null){
            var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
            // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
          resolve({status:config.SUCCESS,url:txn_url,data:params,checksum:checksum});
        }else{
            reject({status:config.ERROR,message:'Details Error'});
        };
    })
   
 })
 return pr;
     
    break;

    case "/paytm/callback":
//  console.log(req.body)

        var paytmChecksum = "";
        let paytmParams = {};
        for(var key in req.body){
            if(key == "CHECKSUMHASH") {
                paytmChecksum = req.body[key];
            } else {
                paytmParams[key] =req.body[key];
            }
        }
      //  console.log('here');
        var isValidChecksum = checksum_lib.verifychecksum(paytmParams,PaytmConfig.key, paytmChecksum);
        if(isValidChecksum) {

        if(paytmParams.STATUS=='TXN_SUCCESS'){
         return {status:config.SUCCESS,data:paytmParams};
        }else{
           return {status:config.ERROR, message:'Transaction UnsuccessFul..'};
        }
        } else {
            return {status:config.ERROR, message:'Transaction UnsuccessFul..'};
        }
        
    break;
}}

module.exports=checkPaytm;
