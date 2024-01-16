

// install mongodb
// require and setuo connection
// make Schema
// create model and export
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");

// database ka ek part or us part ki sabse choti entitity like database ke andar users and users ke andar ek user ko schema kh skte h
const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
})
module.exports=mongoose.model("user",userschema);