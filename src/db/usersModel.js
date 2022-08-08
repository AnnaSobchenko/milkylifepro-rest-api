const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nikName is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],   
  },
  token: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },  
  date:{
    type:String,
    default: new Date()
  }
});

const Users = mongoose.model("users", usersSchema);

module.exports = {
  Users,
};
