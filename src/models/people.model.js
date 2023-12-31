const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  cat: [{ name: String, age: Number }],
});

const People = mongoose.model("people", schema);

module.exports = People;