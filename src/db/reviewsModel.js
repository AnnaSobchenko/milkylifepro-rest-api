const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatarURL: {
    type: String,
  },
  date: {
    type: String,
    default: new Date(),
  },
  review: {
    type: String,
    default: "",
  },
  isApprove: {
    type: Boolean,
    default: false,
  },
});

const Reviews = mongoose.model("reviews", reviewsSchema);

module.exports = {
  Reviews,
};
