const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/users');

const loginCont = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid password' });

    const { password: _, ...userWithoutPassword } = user._doc;

    const token = jwt.sign(userWithoutPassword, process.env.USER_SECRET_KEY, {
      expiresIn: '2h',
    });

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: userWithoutPassword,
    });

  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = loginCont;
