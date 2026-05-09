const jwt = require("jsonwebtoken");

const generateToken = (admin) =>
  jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

module.exports = generateToken;
