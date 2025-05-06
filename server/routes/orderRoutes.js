let express = require('express');
const setOrder = require('../controllers/orders-controller/setOrder');
const verifyToken = require('../middleware/jwtMD');
const getOrders = require('../controllers/orders-controller/getAllOrders');
const getUserOrders = require('../controllers/orders-controller/getUserOrders');

let Router = express.Router();

Router.post('/api/order',verifyToken,setOrder); 
Router.get('/dashboard/orders',getOrders);
Router.get('/api/orders/my-orders',verifyToken,getUserOrders);


module.exports = Router;