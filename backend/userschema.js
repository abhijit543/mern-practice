
const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fullname : {type:String, required:true},
    email    : {type:String, required:true},
    password : {type:String, required:true},
    mobile   : {type:Number, required:true},
    address  : {type:String, required:false}
});

module.exports = mongoose.model("Myuser", tableStructure);