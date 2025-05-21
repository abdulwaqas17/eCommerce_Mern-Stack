let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  number: String,
  address: String,
  city: String,
  country: String,
  dob: String, // 👈 Added Date of Birth
  role: { type: String, default: "user" },
  userOders: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  profileImage: String,
  otp: String,
  otpExpires: Date,
  createdAt: { type: Date, default: Date.now },
});

// let userSchema = mongoose.Schema({

//     fullName :  {type : String, require : true},
//     email : {type : String, require : true , unique : true},
//     password :  {type : String, require : true },
//     number :  {type : Number, require : true , unique : true},
//     address :  {type : String, require : true},
//     country :  {type : String, require : true},
//     role : {type : String, require : true},
//     dob : {type : String, require : true},
//     userOders : [{type : mongoose.Schema.Types.ObjectId, ref : 'products'}],

// })

let users = mongoose.model("users", userSchema);
module.exports = users;
