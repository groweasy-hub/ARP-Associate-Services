const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");

const bootstrapAdmin = async () => {
  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME?.trim() || "Admin";

  if (!adminEmail || !adminPassword) {
    console.warn("Admin bootstrap skipped because ADMIN_EMAIL or ADMIN_PASSWORD is missing.");
    return;
  }

  const existingAdmin = await Admin.findOne({ email: adminEmail });
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  if (!existingAdmin) {
    await Admin.create({
      name: adminName,
      email: adminEmail,
      password: hashedPassword,
    });
    console.log(`Admin created for ${adminEmail}`);
    return;
  }

  existingAdmin.name = adminName;
  existingAdmin.password = hashedPassword;
  await existingAdmin.save();
  console.log(`Admin credentials refreshed for ${adminEmail}`);
};

module.exports = bootstrapAdmin;
