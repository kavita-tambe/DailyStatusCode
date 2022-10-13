const express=require('express')
const router=express.Router()
const authe = require('../../middleware/authe')
const Users=require('../../models/Users')
const config = require('config');
 const jwt=require('jsonwebtoken')
 const { check } = require('express-validator')
const {validationResult}=require('express-validator')
const bcrypt=require('bcryptjs')




//@routeb GET api/auth
//@desc getting token information{{name,email,password.....}}
//@access public
router.get("/",authe,async(req,res)=>
{
    try{
        const user=await Users.findById(req.user.id).select('-password')
        res.send(user)
    }
    catch(err){
        console.error(err.message)
        res.send("server error")
    }
})

//@routeb post api/auth
//@desc authentication
//@access public
//login
router.post(
    '/',[
    
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Password is required'
    ).exists()
    ]
    ,
    async(req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
      }
//if user already register
        const {email,password}=req.body
            try{
                      let user=await Users.findOne({email})
                           if(!user)
                            {
                             return  res.json({email:[{msg:'User is not exist'}]})
                            }
       

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch)
        {
            return  res.json({msg:'password not match'})  
        }
    
    
    //jsonwebtoken..create a payload and sign for token 
    const payload={
        user:{
            id:user.id
             }
                  }
    jwt.sign(payload,
        config.get('key'),
        {expiresIn:3600},
        (err,token)=>
                 {
                 if(err) throw err
                 res.json({token})
                
                 }
            )

   
}

    catch(err){
    console.log(err.message)
    res.send("server err")
}
}

)




module.exports=router