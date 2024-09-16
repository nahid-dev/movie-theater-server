const express = require("express");
const router = express.Router();
// const Admin = require("../models/Admin");


router.get("/", async(req, res)=>{
    res.send("ok")
})


module.exports = router