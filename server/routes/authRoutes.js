let express = require('express');
let Router = express.Router();
let checker = require('../middleware/authMD');
let signupCont = require('../controllers/auth-controllers/signupController');
let loginCont = require('../controllers/auth-controllers/loginController');
let Upload = require('../middleware/upload');
const EmpRegister = require('../controllers/auth-controllers/employeeRegister');
const EmpLogin = require('../controllers/auth-controllers/employeeLogin');
const AdminLogin = require('../controllers/auth-controllers/adminLogin');
 

// User Register and Login 
// Upload.single phelay, because ye data parse kry ga
Router.post('/signup',Upload.single('profileImage'),checker,signupCont);
Router.post('/login',loginCont);

// Employee Register and Login 
Router.post('/employee/register',Upload.single('profileImage'),checker,EmpRegister);
Router.post('/employee/login',EmpLogin);


// Admin Login 
Router.post('/admin/login',AdminLogin);

module.exports = Router; 