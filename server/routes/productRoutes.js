let express = require('express');
const getProducts = require('../controllers/products-controller/productController');
const getProduct = require('../controllers/products-controller/getProductCont');
let Router = express.Router();


Router.get('/products',getProducts);
Router.get('/products/get/:id',getProduct); 

module.exports = Router;