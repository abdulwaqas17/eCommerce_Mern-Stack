let bcrypt = require('bcryptjs');
let userModel = require('../models/users')

let Login = async (req,res) => {

  
    try {

      
    const {email,password} = req.body;
  
    if(!email || !password) {
  
      return res.send({status : 404,message : 'kindly fill all the fields'})
  
    }
  
      let user = await userModel.findOne({email});
  
      console.log(user);
  
      if (!user) {
        return (
          res.send({
          status : 403,
          message : 'email not found'
        })
        )
      }
  
      let isMatch = await bcrypt.compare(password,user.password);
  
      if (!isMatch) {
        return (
          res.send({
          status : 403,
          message : 'wrong password'
        })
        )
      }
  
      const payloud = {
  
        id : user._id,
        fullname : user.fullname,
        email : user.email,
        role : user.role,
        

      }
  
      const token = jwt.sign(payloud,'secret123',{'expiresIn':'1h'})
      res.send({
        status : 200,
        message : 'Login Successfully',
        token : token,
        user : payloud
      })
  
    } catch (err) {
      console.log('error is login =', err);
      res.send({
        status : 500,
        message : err.message
      })
    }
    
}

module.exports = Login;