const bcrypt = require('bcryptjs');
const adminModel = require('../../models/admin');
const jwt = require('jsonwebtoken');

const AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // Check if admin exists
    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Remove password before sending
    const { password: _, ...adminWithoutPassword } = admin.toObject();

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, role: "admin" }, // payload should be minimal
      process.env.ADMIN_SECRET_KEY,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      message: "Admin login successful",
      token,
      admin: adminWithoutPassword
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = AdminLogin;
