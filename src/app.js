const express = require("express");

const app = express();
// order of routing path matter. it follow like try catch error method
app.get("/user", (req, res) => {
  res.send({ firstName: "Saurabh", lastName: "Nishad" });
});

app.post("/user", (req, res) => {
  res.send("Data saved Successfully");
});

app.delete("/user", (req, res) => {
  res.send("user data deleted");
});

app.use("/test", (req, res) => {
  res.send("Testing the server");
});

app.use("/", (req, res) => {
  res.send("Welcome to Node Project");
});
app.listen(3000, () => {
  //   res.send("Hello");
  console.log("Server Started");
});
