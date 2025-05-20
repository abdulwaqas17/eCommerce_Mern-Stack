const jwt = require('jsonwebtoken');

const userKey = process.env.USER_SECRET_KEY;
const employeeKey = process.env.EMPLOYEE_SECRET_KEY;
const adminKey = process.env.ADMIN_SECRET_KEY;

if (!userKey || !employeeKey || !adminKey) {
  throw new Error("JWT secret keys are missing in environment variables");
}

const verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    const role = req.headers.role;

    if (!bearerHeader || !role) {
      return res.status(401).json({
        success: false,
        message: 'Authorization header or role missing',
      });
    }

    const token = bearerHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token not provided',
      });
    }

    let secretKey = userKey;
    if (role === 'admin') {
      secretKey = adminKey;
    } else if (role === 'employee') {
      secretKey = employeeKey;
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Invalid or expired token',
        });
      }

      req.user = decoded;
      next();
    });
  } catch (err) {
    console.error("JWT Middleware Error:", err.message);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports = verifyToken;
