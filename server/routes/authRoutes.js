let express = require('express');
let Router = express.Router();
let signupMD = require('../middleware/authMD');
let signupCont = require('../controllers/signupController');
let loginCont = require('../controllers/loginController');
let Upload = require('../middleware/upload') 

// Upload.single phelay, because se data parse kry ga
Router.post('/signup',Upload.single('profileImage'),signupMD,signupCont);

Router.post('/login',loginCont);

module.exports = Router; 