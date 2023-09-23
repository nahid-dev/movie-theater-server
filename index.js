const express = require("express");
const app = express();
const cors = require("cors");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleWere
app.use(cors());
app.use(express.json());

// test get method:
app.get("/", (req, res) => {
  res.send("Movie Theater Server Is Running");
});

app.listen(port, () => {
  console.log(`Movie theater server running on ${port}`);
});
