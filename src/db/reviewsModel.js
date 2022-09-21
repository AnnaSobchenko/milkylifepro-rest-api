const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  user: {
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
});

const Reviews = mongoose.model("reviews", reviewsSchema);

module.exports = {
  Reviews,
};
