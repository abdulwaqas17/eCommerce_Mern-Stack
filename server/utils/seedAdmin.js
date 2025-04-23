// seedAdmin.js
let dotenv = require('dotenv');
dotenv.config()
let AdminModel = require("../models/admin");
const connectDB = require('../config/db'); 
let bcrypt = require("bcryptjs"); 


const createAdmin = async () => {
 try {

       await connectDB();

    const hashedPassword = await bcrypt.hash("W@qa$admin", 10);
    let admin = await AdminModel.create({
      fullname: "M Waqas",
      email: "admin17112005gmail.com",
      password: hashedPassword,
      role: "admin",
    });
    console.log("Admin created",admin);
    process.exit();

 } catch (err) {
    console.log(err);
    process.exit(1);
    
 }
};

createAdmin();
