const multer = require("multer");
const storage = multer.diskStorage({});

const upload = multer({ storage });

module.exports = upload;



// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads'); // folder jahan image save hogi
//   },
//   filename: function (req, file, cb) {
//     // jhn '.' h, whn se split , file ka uinque name generate krna her bar
//     const uniquepreffix = file.originalname.split('.')[0] + '-' + Date.now();
//     cb(null, uniquepreffix + path.extname(file.originalname)); // e.g. 168123456.png
//   }
// })
// const upload = multer({ storage: storage });

// module.exports = upload; 