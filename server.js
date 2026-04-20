const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/testdb")
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));



// routes
app.get("/", (req, res) => {
  res.send("Server is running ");
});






app.listen(3000, () => console.log("Server running"));