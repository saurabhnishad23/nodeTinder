const express = require("express");

const app = express();

// order of routing path matter. it follow like try catch error method

const connectDb = require("./config/database");
const { default: mongoose } = require("mongoose");

const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("Data added Successfully");
  } catch (err) {
    res.status(400).send("Error on saving", err.message);
  }
});

app.get("/user", async (req, res) => {
  const userFirstName = req.body.firstName;

  try {
    const users = await User.find({ firstName: userFirstName });
    if (users.length === 0) {
      res.status(404).send("user not found");
    } else res.send(users);
  } catch (err) {
    res.status(404).send("something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(404).send("user not found");
  }
});

app.put("/user", async (req, res) => {
  const userfirstName = req.body.firstName;
  const updateEmailId = req.body.emailId;
  try {
    const updateUser = await User.updateOne(
      { firstName: userfirstName },
      { emailId: updateEmailId }
    );
    // await updateUser.save();
    res.send("data updated successfully");
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("user data updated successfully");
  } catch (err) {
    res.status(400).send("something went wrong" + err.message);
  }
});

app.delete("/user", async (req, res) => {
  const userById = req.body._id;
  try {
    await User.deleteOne({ _id: userById });
    res.send("user data deleted successfully");
  } catch (err) {
    res.status(404).send("user not found");
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
