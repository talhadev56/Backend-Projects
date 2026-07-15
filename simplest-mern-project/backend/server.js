const app = require("./src/app");
const connectDb = require('./src/db/db')
const express = require("express");

connectDb()



app.listen(3000, () => {
  console.log("working on 3000 port");
});
