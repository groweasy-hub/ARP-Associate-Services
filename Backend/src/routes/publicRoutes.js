const express = require("express");

const { createLead } = require("../controllers/leadController");

const router = express.Router();

router.post("/send-mail", createLead);
router.post("/leads", createLead);

module.exports = router;
