const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Dbconnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb is connected");
  } catch (err) {
    console.log("mongodb is not connected", err);
  }
};

Dbconnect();
