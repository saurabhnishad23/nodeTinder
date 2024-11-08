const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");
// order of routing path matter. it follow like try catch error method

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res, next) => {
  console.log("Auth checking");
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.send("user data deleted");
});

app.get(
  "/user",
  userAuth,
  (req, res, next) => {
    next();
  },
  (req, res) => {
    console.log("rh2 handler");
    res.send({ firstName: "Saurabh", lastName: "Nishad" });
  }
);

app.post("/user", (req, res) => {
  res.send("Data saved Successfully");
});

app.delete("/user", (req, res) => {
  res.send("user data deleted");
});

app.use("/test", (req, res) => {
  res.send("Testing the server");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(501).send("Something went wrong");
  }
});
app.listen(3000, () => {
  //   res.send("Hello");
  console.log("Server Started");
});
