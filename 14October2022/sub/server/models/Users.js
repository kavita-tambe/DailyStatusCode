// const mongoose=require('mongoose')
// const Userschema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     avatar:{
//         type:String,

//     },
//     date:
//     {
//         type:Date,
//         default:Date.now
//     }
// })
// module.exports=Users=mongoose.model('user',Userschema)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Users = mongoose.model("user", UserSchema);
