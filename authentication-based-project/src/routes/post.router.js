const express = require("express");
const router = express.Router()
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

router.post('/create',async (req,res)=>{

   const token = req.cookies.token

   if(!token){
   return  res.status(401).json({
       message:"unauthorized"
    })
   }

   try{
     const decoded = jwt.verify(token,process.env.JWTSECRETE)

     const user = await userModel.findOne({
        _id:decoded.id
     })
       console.log(user)
       
   }catch(err){
    return res.status(401).json({
     message:"token is invalid",
     })
   }
   res.send("post created successfully")
})

module.exports = router
