const express = require("express");

const app = express();

// order of routing path matter. it follow like try catch error method

const connectDb = require("./config/database");
const { default: mongoose } = require("mongoose");

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Chaman",
    lastName: "Singh",
    email: "chaman@singh.com",
    password: "chaman@123",
  });

  try {
    await user.save();
    res.send("Data added Successfully");
  } catch (err) {
    res.status(400).send("Error on saving", err.message);
  }
});

connectDb()
  .then(() => {
    console.log("Database connection established");
    app.listen(2340, () => {
      console.log("Server is successfully listening on port 2340...");
    });
  })
  .catch((err) => {
    console.error("database connection failed");
  });
