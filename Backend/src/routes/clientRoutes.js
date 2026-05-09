const express = require("express");

const protectAdmin = require("../middlewares/authMiddleware");
const {
  getClients,
  createClient,
  updateClient,
  addClientHistory,
} = require("../controllers/clientController");

const router = express.Router();

router.use(protectAdmin);
router.get("/", getClients);
router.post("/", createClient);
router.patch("/:id", updateClient);
router.post("/:id/history", addClientHistory);

module.exports = router;
