let express = require('express');
const getProducts = require('../controllers/products-controller/productController');
const getProduct = require('../controllers/products-controller/getProductCont');
const verifyToken = require('../middleware/jwtMD');
const delProduct = require('../controllers/products-controller/delProduct');
const upload = require('../middleware/upload');
const updateProduct = require('../controllers/products-controller/updateProduct');
let Router = express.Router();


Router.get('/products',getProducts);
// Router.get('/products/get/:id',getProduct); 
// routes/productRoutes.js
Router.delete("/product/delete/:id",verifyToken,delProduct);
Router.put("/product/update/:id",upload.single('image'),verifyToken,updateProduct);
  

module.exports = Router;