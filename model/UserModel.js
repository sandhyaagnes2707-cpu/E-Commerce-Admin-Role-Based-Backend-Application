const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gmail: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  profilePic: { type: String },
  password: { type: String, required: true },
},{timestamps:true});
module.exports = mongoose.model("user", userSchema);
