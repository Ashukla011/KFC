const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[6-9]\d{9}$/
  },
}, { timestamps: true });



const UserAuthModule = mongoose.model("User", UserSchema);
module.exports = { UserAuthModule };
