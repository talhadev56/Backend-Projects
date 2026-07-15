const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

async function registerUser(req,res){
 let { username,email,password } = req.body

 const isUserAlreadyExists = await userModel.findOne({ email })

 if(isUserAlreadyExists){
    return res.status(409).json({
        message:"User already exists"
    })
 }

 const user = await userModel.create({
    username,email,password
 })

 const token = jwt.sign({
     id:user._id }, 
     process.env.JWTSECRETE)

 res.cookie("token",token)
 
 res.status(201).json({
    msg:"user created successfully",
    user
 })
}

module.exports = { registerUser }