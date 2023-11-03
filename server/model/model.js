//

const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: { type: String, require: true },
  auther: { type: String, require: true },
  link: { type: String, require: true },
  description: { type: String, require: true },
  date: String,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
