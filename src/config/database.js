const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://naveennishad88:PgL1GZcuqsrFM2YX@cluster0.aub36.mongodb.net/devTinder"
  );
};

module.exports = connectDb;
