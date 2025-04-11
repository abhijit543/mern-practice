
const express = require("express");
const router = express.Router();
module.exports = router;

const Myuser = require("./userschema");

router.get("/", (req, res)=>{
    res.status(200).json({message:"Api is working"})
});

