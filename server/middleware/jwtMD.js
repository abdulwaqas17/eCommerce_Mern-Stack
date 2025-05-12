const jwt = require('jsonwebtoken');


let userKey = process.env.USER_SECRET_KEY;
let employeeKey = process.env.EMPLOYEE_SECRET_KEY;
let adminKey = process.env.ADMIN_SECRET_KEY;


const verifyToken = (req,res,next) => {
    
    try {

        // ye aik obj h aur is m multiple cheezen hoti hn, aur authorization bhi hota h
    // console.log(req.headers); 

    // req.headers is m aik object milta h
    const bearerHeader = req.headers.authorization;

    console.log(bearerHeader);

    if (!bearerHeader) {
        res.send({
            status : 401,
            message : 'token not found',
            success : false
        })
    }

    const token = bearerHeader.split(" ")[1];
    const role = req.headers.role; // is role aya ga, jis ne request bhji h us ka
    


    // console.log(token);

    // ager token nhe bhi mila to developer ki galti h, user ki koi galti nhe h, is lien ye if bnaty bhi nhe hn
    if (!token) {
        res.send({
            status : 401,
            message : 'token not found',
            success : false
        })
    }

    console.log('userKey,employeeKey,adminKey)' ,userKey,employeeKey,adminKey);
    


    // set correct secret key
    let secretKey = userKey

    if (role == 'admin') {
        secretKey = adminKey
    } else if (role == 'employee') {
        secretKey = employeeKey
    }

    

    // const decoded = jwt.verify(token, 'secret_key');
    //   req.user = decoded;

    jwt.verify(token,secretKey,(err,decode)=> {
        if(err) {
            return res.send({
                status : 401,
                message : 'invalid token',
                success : false
            })
        }

        // decode krnay se payloud k ander ka data mil jata h
        // console.log(decode);

        req.user = decode;

        next();
    })

    }  catch (err) {
        console.log(err);
        res.send({
            status : 500,
            message : err.message,
            success : false
        })
        
      }
}

module.exports = verifyToken;