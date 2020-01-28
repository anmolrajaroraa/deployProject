const logger=require("./winstonLogger");


const handleError=function(error,req,res,next){
    console.log(error);
    logger.debug(error,"server crashed because of this error");
    res.status(500).send("server crashed");
}


module.exports=handleError;