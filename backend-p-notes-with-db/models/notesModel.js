const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    title:String,
    description:String
})

module.exports = userSchema