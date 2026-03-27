const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db connected successfully..😊");
  } catch (error) {
    console.log("Failed to connected db 😔");
  }
};
module.exports = connection;
