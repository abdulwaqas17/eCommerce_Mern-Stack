let express = require('express');
const getProducts = require('../controllers/products-controller/productController');
const getProduct = require('../controllers/products-controller/getProductCont');
const verifyToken = require('../middleware/jwtMD');
const delProduct = require('../controllers/products-controller/delProduct');
let Router = express.Router();


Router.get('/products',getProducts);
// Router.get('/products/get/:id',getProduct); 
// routes/productRoutes.js
Router.delete("/product/delete/:id",verifyToken,delProduct);
  

module.exports = Router;