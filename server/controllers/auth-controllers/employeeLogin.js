let bcrypt = require('bcryptjs');
let EmployeeModel = require('../../models/employees');
let jwt = require('jsonwebtoken');


let EmpLogin = async (req,res) => {

  console.log(req.body);
  
    try {

      
    const {email,password} = req.body;
  
    if(!email || !password) {
  
      return res.send({status : 404,message : 'kindly fill all the fields'})
  
    }
  
      let employee = await EmployeeModel.findOne({email});
  
      console.log(employee);
  
      if (!employee) {
        return (
          res.send({
          status : 403,
          message : 'email not found'
        })
        )
      }
  
      let isMatch = await bcrypt.compare(password,employee.password);


  
      if (!isMatch) {
        return (
          res.send({
          status : 403,
          message : 'wrong password'
        })
        )
      }

      const {password : _, ...employeeWithOutPassword} = employee._doc;

      console.log('employee.doc', employee._doc);
      console.log('employeeWithOutPassword', employeeWithOutPassword);
     

      const payload = employeeWithOutPassword;
  
      const token = jwt.sign(payload,'secret-employee-123',{'expiresIn':'1h'})

      res.send({
        status : 200,
        message : 'Login Successfully',
        token : token,
        employee : payload
      })
  
    } catch (err) {
      console.log('error in login =', err);
      res.send({
        status : 500,
        message : err.message
      })
    }
    
}

module.exports = EmpLogin;