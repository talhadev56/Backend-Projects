require("dotenv").config()
const express = require('express')
const postModel = require('./models/post.model')
const uploadFile = require('./services/storageServices')
const multer = require('multer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const upload = multer({ storage:multer.memoryStorage() }) 

app.post('/create-post',upload.single("image") ,async (req,res)=>{
    const result = await uploadFile(req.file.buffer)
    
    const post =await postModel.create({
       image : result.url,
       caption:req.body.caption
    })
    return res.status(201).json({
        message : "post is created",
        post
    })
})

app.get("/posts",async (req,res)=>{
 const posts = await postModel.find()

    return res.status(200).json({
        message : "post fetched",
        posts
    })
})

module.exports = app