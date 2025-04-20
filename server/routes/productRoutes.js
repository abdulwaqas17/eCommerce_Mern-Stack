let express = require('express');
const getProducts = require('../controllers/productController');
let Router = express.Router();


Router.get('/products',getProducts);

module.exports = Router;