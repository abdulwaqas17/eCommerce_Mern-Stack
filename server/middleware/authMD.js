let userChecker = (req,res,next)=> {

  try {

    console.log(req.body);
    

    const {email,number} = req.body; 


    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!regex.test(email)) {
        return res.status(402).json({message : 'invalid email'});
    }

    const regex2 = /^(?:\+92|0)[3-9][0-9]{9}$/;

    if(!regex2.test(number)) {
        return res.status(403).json({message : 'invalid phone number'});
    }

    next();

  } catch (err) {
    console.log(err);
    res.send({
        status : 500,
        message : err.message
    })
    
  }

}

module.exports = userChecker;