const express = require("express");
const router = express.Router()
const authContorller = require("../controller/auth.controller")

router.post("/register",authContorller.registerUser)


module.exports = router