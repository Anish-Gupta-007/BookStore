const mongoose = require("mongoose");

const Bookschema = mongoose.Schema({
  name: {
    type: String,
  },
  aouthor: {
    type: String,
    requird: true,
  },
  image: {
    type: String,
    requird: true,
  },
});

module.exports = mongoose.model("Bookschema", Bookschema);
