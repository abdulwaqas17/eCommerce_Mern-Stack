let express = require('express');

let Router = express.Router();
let verifyToken = require('../middleware/jwtMD');
const sendUser = require('../controllers/userController');
const updateUser = require('../controllers/user-controller/userUpdate');

Router.get('/user',verifyToken,sendUser);
Router.put('/api/user/update',verifyToken, updateUser);

module.exports = Router;