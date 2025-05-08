let express = require('express');
let Router = express.Router();
const verifyToken = require('../middleware/jwtMD');
const isVerify = require('../controllers/tokenVerfiy');

Router.get('/verify/:role',verifyToken,isVerify);

module.exports = Router;