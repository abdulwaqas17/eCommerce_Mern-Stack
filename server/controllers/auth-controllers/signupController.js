let bcrypt = require('bcryptjs');
let userModel = require('../../models/users');
const cloudinary = require('../../config/cloudinary');

let Signup = async (req, res) => {

    try {

        console.log(req.body);
        console.log(req.file);

        // req.file.path: 'C:\\Users\\RBCOMP~1\\AppData\\Local\\Temp\\347c671889eb4ecf9693a52a46c70d84',


        const { fullname, email, dob, password, country, number, userOders, address, city } = req.body;

        const exitingUser = await userModel.findOne({ email }); // null or document

        if (exitingUser) {
            return res.send({
                status: 402,
                message: 'this email is already use'
            })
        }

        // const exitingUser2 = await userModel.findOne({ number }); // null or document

        // if (exitingUser2) {
        //     return res.status(402).json({ message: 'this number is already use' });
        // }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'ecommerce_products',
        });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            fullname,
            dob,
            email,
            country,
            city,
            number,
            userOders,
            address,
            password: hashedPassword,
            profileImage: result.secure_url
        })

        await newUser.save(); // document save hoga

        console.log(newUser);

        console.log(newUser._doc);


        const { password: _, ...userWithOutPassword } = newUser._doc;

        console.log(userWithOutPassword);
        console.log(password);


        res.send({

            status: 200,
            message: 'Register successfully',
            data: userWithOutPassword

        })


    } catch (err) {
        console.error(err.message); // backend terminal pe error dekhne ke liye
        res.send({
            status: 500,
            message: err.message
        }); // frontend ko error bhejne ke liye
    }
}

module.exports = Signup;