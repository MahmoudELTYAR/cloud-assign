const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/testdb";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log("Mongo connection error:", err.message));



// routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/health", (req, res) => {
  const state = mongoose.connection.readyState;
  const mongoConnected = state === 1;
  res.status(mongoConnected ? 200 : 503).json({
    status: mongoConnected ? "ok" : "degraded",
    mongoConnected,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));