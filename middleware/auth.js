const dotenv = require('dotenv');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
dotenv.config({});

exports.isAuthenticated = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Token is required", success: false });
    }

    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Use environment variable for secret key
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ message: "User not found", success: false });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token expired", success: false });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token", success: false , error:error });
    } else {
      return res.status(500).json({ message: "Internal Server Error", success: false, error: error.message });
    }
  }
};
