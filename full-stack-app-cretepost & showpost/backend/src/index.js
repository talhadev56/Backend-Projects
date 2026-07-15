const express = require("express");
const multer = require("multer");
const postModel = require("./models/posts.model")
const uploadFile = require("./services/storage.services")
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.get("/",(req,res)=>{
    res.send(" home route")
})
app.post("/create-post",upload.single('image'),async (req,res)=>{
    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
     image:result.url,
     caption:req.body.caption
    })
 return res.status(201).json({
    message :"post created sucessfully",
    post
 })
})
app.get("/posts",async (req,res)=>{

    const posts = await postModel.find()

    return res.status(200).json({
    message :"posts featched",
    posts
 })
})

module.exports = app