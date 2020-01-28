const jwtVerification={
    adminSecurekey:'adminhere',
    custSecurekey:'custhere',
    empSecurekey:'emphere',
    delBoySecurekey:'delboyhere',
    custExpiryTime:'1000000s',
    adminExpiryTime:'1000000s',
    empExpiryTime:'1000000s',
    delboyExpiryTime:'1000000s',


     adminverifyToken(req,res,next){               //checking for webtoken in the header of req and filling it into req.token
        let bearerHeader = req.headers['adminauthorization'];
        
        if(typeof bearerHeader!= 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.admintoken= bearerToken;
        next();
        
        }else{
            res.status(403).json('Session TimeOut ,Please login again');
        }
    },
    empverifyToken(req,res,next){               //checking for webtoken in the header of req and filling it into req.token
        let bearerHeader = req.headers['empauthorization'];
        
        if(typeof bearerHeader!= 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.emptoken= bearerToken;
        next();
        
        }else{
            res.status(403).json('Session TimeOut ,Please login again');
        }
    },
      custverifyToken(req,res,next){               //checking for webtoken in the header of req and filling it into req.token
        let bearerHeader = req.headers['custauthorization'];
        
        if(typeof bearerHeader!= 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.custtoken= bearerToken;
        next();
        
        }else{
            res.status(403).json('Session TimeOut ,Please login again');
        }
    },
    delboyverifyToken(req,res,next){               //checking for webtoken in the header of req and filling it into req.token
        let bearerHeader = req.headers['delboyauthorization'];
        
        if(typeof bearerHeader!= 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.delboytoken= bearerToken;
        next();
        
        }else{
            res.status(403).json('Session TimeOut ,Please login again');
        }
    }

}

module.exports=jwtVerification;