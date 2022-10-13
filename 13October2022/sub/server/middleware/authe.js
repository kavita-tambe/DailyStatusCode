const jwt = require('jsonwebtoken')
const config = require('config')
  
module.exports=function(req,res,next)
{    
    //get the token from header
    const token = req.header('x-auth-token')

    //check if not token
    if(!token)
    {
        res.status(401).json({msg:'no token,autharization denied'})
    }
    try{
         //there is token then decoded it and verify it
         const decoded=jwt.verify(token,config.get('key'))

         //take req object and assign value to user and set it to decoded user(this user in payload)
         req.user=decoded.user

         next()

    }
    catch(err)
    {
         res.status(401).json({msg:"token is not valid"})
    }
}

