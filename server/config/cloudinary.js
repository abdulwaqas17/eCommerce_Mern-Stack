// Ye code cloudinary.js config file ka hota hai — jo aapke Cloudinary account ko Node.js app se connect karta hai taake aap images/videos ko upload, delete, ya manage kar sako.

require('dotenv').config();

// Cloudinary library ko import karta hai. .v2 likhna zaruri hai because Cloudinary ka version 2 ka syntax slightly different hota hai.
const cloudinary = require('cloudinary').v2;


// Cloudinary ke SDK ko aapke account ke credentials ke sath configure karta hai.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// exacttly is hi trhn likhna [cloud_name] h etc..

// Cloudinary ko export karta hai use ke liye
module.exports = cloudinary;



// Cloudinary SDK me:

// Upload karne ke functions hote hain

// Image transformation tools hote hain

// Secure URL generate karne ke tools hote hain



