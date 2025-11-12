const mongoose = require("mongoose");

const Studentschema = mongoose.Schema({
  roll: {
    type: String,
  },
  userName: {
    type: String,
    requird: true,
    unique: true,
  },
  password: {
    type: String,
    requird: true,
  },
  grade: {
    type: String,
  },
});

module.exports = mongoose.model("Studentschema", Studentschema);
