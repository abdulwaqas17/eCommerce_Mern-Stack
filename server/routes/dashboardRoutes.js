let express = require('express');
let Router = express.Router();
const addProduct = require('../controllers/products-controller/addProductCont');
const verifyToken = require('../middleware/jwtMD');
let Upload = require('../middleware/upload');


let upload = Upload.fields([
    {name : 'image1', maxCount : 1}, // sirf 1 file 'image1' field se
    {name : 'image2', maxCount : 1}, 
])
Router.post('/admin/add-product',upload,verifyToken,addProduct);


module.exports = Router;