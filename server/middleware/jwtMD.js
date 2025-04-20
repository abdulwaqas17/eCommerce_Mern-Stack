const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {

    try {

        // ye aik obj h aur is m multiple cheezen hoti hn, aur authorization bhi hota h
    console.log(req.headers); 

    // req.headers is m aik object milta h
    const bearerHeader = req.headers.authorization;

    console.log(bearerHeader);

    if (!bearerHeader) {
        res.send({
            status : 401,
            message : 'token not found'
        })
    }

    const token = bearerHeader.split(" ")[1];

    console.log(token);

    // ager token nhe bhi mila to developer ki galti h, user ki koi galti nhe h, is lien ye if bnaty bhi nhe hn
    if (!token) {
        res.send({
            status : 401,
            message : 'token not found'
        })
    }

    // const decoded = jwt.verify(token, 'secret_key');
    //   req.user = decoded;

    jwt.verify(token,'secret123',(err,decode)=> {
        if(err) {
            return res.send({
                status : 401,
                message : 'invalid token'
            })
        }

        // decode krnay se payloud k ander ka data mil jata h
        console.log(decode);

        req.user = decode;

        next();
    })

    }  catch (err) {
        console.log(err);
        res.send({
            status : 500,
            message : err.message
        })
        
      }
}

module.exports = verifyToken;