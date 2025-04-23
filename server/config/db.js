let mongoose = require('mongoose');
let dotenv = require('dotenv');
dotenv.config();
let mongoURI = process.env.MONGO_URI;

console.log(mongoURI);


const dbConnect = async() => {

   try {

    await mongoose.connect(mongoURI);
    console.log('db connected successfully');

   } catch (err) {
    console.log(err);
    process.exit(1);
    
   }
    
}

module.exports = dbConnect;
