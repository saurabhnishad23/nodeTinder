const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello Node1");
});

app.use("/test", (req, res) => {
  res.send("Testing the server");
});

app.listen(3000, () => {
  //   res.send("Hello");
  console.log("Server Started");
});
