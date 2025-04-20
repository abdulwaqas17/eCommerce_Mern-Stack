let bcrypt = require('bcryptjs');
let userModel = require('../models/users')
let Signup = async (req, res) => {

    try {

        console.log(req.body);
        console.log(req.file);
        

        const { fullname, email, dob, password,role,country, number,userOders,address,city,profileImage } = req.body;

        const exitingUser = await userModel.findOne({ email }); // null or document

        if (exitingUser) {
            return res.status(402).json({ message: 'this email is already use' })
        }

        // const exitingUser2 = await userModel.findOne({ number }); // null or document

        // if (exitingUser2) {
        //     return res.status(402).json({ message: 'this number is already use' });
        // }

        

        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = new userModel({
            fullname,
            dob,
            role,
            email,
            country,
            number,
            userOders,
            address,
            password: hashedPassword,
            city,
            profileImage : req.file.filename
        })

        await newUser.save(); // document save hoga

        console.log(newUser);

        res.status(200).json({

            message: 'data submitted successfully',
            data: newUser

        })


    } catch (err) {
        console.error(err.message); // backend terminal pe error dekhne ke liye
    res.status(500).json({ message: err.message }); // frontend ko error bhejne ke liye
    }
}

module.exports = Signup;