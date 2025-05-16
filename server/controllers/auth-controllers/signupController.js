const bcrypt = require("bcryptjs");
const userModel = require("../../models/users");
const cloudinary = require("../../config/cloudinary");
const fs = require("fs");

const Signup = async (req, res) => {
  try {
    const {
      fullname,
      email,
      dob,
      password,
      country,
      number,
      userOders,
      address,
      city,
    } = req.body;

    // 1. Input Validation (Best: Use Joi/Zod in middleware)
    if (!fullname || !email || !password || !req.file) {
      return res
        .status(400)
        .json({
          statusCode: 400,
          success: false,
          message: "Required fields missing.",
        });
    }

    // 2. Check for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({
          statusCode: 409,
          success: false,
          message: "Email already in use.",
        });
    }

    // (Optional) Check for existing phone number
    // const existingPhone = await userModel.findOne({ number });
    // if (existingPhone) {
    //   return res.status(409).json({ status: 409, message: 'Phone number already in use.' });
    // }

    // 3. Upload Image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "ecommerce_users",
    });

    // 4. Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create and Save User
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
      profileImage: result.secure_url,
    });

    await newUser.save();

    // 6. Clean Response: Remove password before sending
    const { password: _, ...userWithoutPassword } = newUser.toObject(); 

    // 7. Remove local file (best practice)
    fs.unlinkSync(req.file.path);

    return res.status(201).json({
      statusCode: 201,
      success: true,
      message: "User registered successfully.",
      data: userWithoutPassword,
    });
  } catch (err) {
    console.error("Signup Error:", err.message);
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Server error. Please try again later.",
      error: err.message,
    });
  }
};

module.exports = Signup;
