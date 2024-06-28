const mongoose = require("mongoose");

const UserScheema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true, unique: true },
  MobileNumber: { type: String, required: true, unique: true },
});

const UserAuthModule = mongoose.model("auth", UserScheema);
module.exports = { UserAuthModule };
