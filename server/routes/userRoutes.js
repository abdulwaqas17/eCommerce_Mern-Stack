let express = require('express');

let Router = express.Router();
let varifyToken = require('../middleware/jwtMD');
const sendUser = require('../controllers/userController');

Router.get('/user',varifyToken,sendUser);

module.exports = Router;