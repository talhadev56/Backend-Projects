const mongoose = require("mongoose");
const notesSchema = require("../models/notesModel");

async function connectDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/helly1")
    console.log("connected to database")
}

const notesModel = mongoose.model("note",notesSchema)
module.exports = { connectDb, notesModel }; 