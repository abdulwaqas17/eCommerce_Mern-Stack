let bcrypt = require('bcryptjs');
let EmployeeModel = require('../../models/employees');
const cloudinary = require('../../config/cloudinary');

let EmpRegister = async (req, res) => {

    try {

        console.log(req.body);
        console.log(req.file);

        // req.file.path: 'C:\\Users\\RBCOMP~1\\AppData\\Local\\Temp\\347c671889eb4ecf9693a52a46c70d84',


        const { fullname, email, dob, password, country, number, address, department, profileImage } = req.body;



        // check exitingUser
        const exitingUser = await EmployeeModel.findOne({ email }); // null or document

        if (exitingUser) {
            return res.send({
                status: 409,
                message: 'this email is already use'
            })
        }

        // craete cloudinary img link
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'ecommerce_products',
        });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newEmployee = new EmployeeModel({
            fullname,
            dob,
            email,
            country,
            number,
            address,
            department,
            password: hashedPassword,
            profileImage: result.secure_url
        })

        await newEmployee.save(); // document save hoga

        console.log(newEmployee);

        console.log(newEmployee._doc);


        const { password: _, ...empWithOutPassword } = newEmployee._doc;

        console.log(empWithOutPassword);
        console.log(password);


        res.send({

            status: 200,
            message: 'Employee Register successfully',
            data: empWithOutPassword

        })


    } catch (err) {
        console.error(err.message); // backend terminal pe error dekhne ke liye
        res.send({
            status: 500,
            message: err.message
        }); // frontend ko error bhejne ke liye
    }
}

module.exports = EmpRegister;