const express = require("express");
const cors = require("cors");

const publicRoutes = require("./routes/publicRoutes");
const authRoutes = require("./routes/authRoutes");
const leadRoutes = require("./routes/leadRoutes");
const clientRoutes = require("./routes/clientRoutes");
const { notFoundHandler, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "arp-backend" });
});

app.use("/api", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/clients", clientRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
