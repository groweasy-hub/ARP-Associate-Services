const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    return res.json({
      message: "Login successful.",
      token: generateToken(admin),
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  loginAdmin,
};
