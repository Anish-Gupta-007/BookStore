const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
  userName: {
    type: String,
    requird: true,
    unique: true,
  },
  password: {
    type: String,
    requird: true,
  },
});

module.exports = mongoose.model("adminschema", adminschema);
