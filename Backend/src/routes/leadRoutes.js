const express = require("express");

const { getLeads, updateLeadStatus } = require("../controllers/leadController");
const protectAdmin = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(protectAdmin);
router.get("/", getLeads);
router.patch("/:id", updateLeadStatus);

module.exports = router;
