let bcrypt = require('bcryptjs');
let adminModel = require('../../models/admin');
let jwt = require('jsonwebtoken');


let AdminLogin = async (req,res) => {

  console.log(req.body);
  
    try {

      
    const {email,password} = req.body;
  
    if(!email || !password) {
  
      return res.send({status : 404,message : 'kindly fill all the fields'})
  
    }
  
      let admin = await adminModel.findOne({email});
  
      console.log(admin);
  
      if (!admin) {
        return (
          res.send({
          status : 403,
          message : 'email not found'
        })
        )
      }
  
      let isMatch = await bcrypt.compare(password,admin.password);


  
      if (!isMatch) {
        return (
          res.send({
          status : 403,
          message : 'wrong password'
        })
        )
      }

      const {password : _, ...adminWithOutPassword} = admin._doc;

      console.log('admin.doc', admin._doc);
      console.log('adminWithOutPassword', adminWithOutPassword);
     

      const payload = adminWithOutPassword;
  
      const token = jwt.sign(payload,'secret-admin-123',{'expiresIn':'1h'})

      res.send({
        status : 200,
        message : 'Admin Login Successfully',
        token : token,
        admin : payload
      })
  
    } catch (err) {
      console.log('error in login =', err);
      res.send({
        status : 500,
        message : err.message
      })
    }
    
}

module.exports = AdminLogin;