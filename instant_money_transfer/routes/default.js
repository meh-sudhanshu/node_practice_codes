const express = require("express")


const path = require("path")


const router = express.Router()
const loginHandler = require("../controller/login")

router.use("/",loginHandler)

module.exports = router