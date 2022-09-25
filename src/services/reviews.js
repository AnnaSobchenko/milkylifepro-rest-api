const { Reviews } = require("../db/reviewsModel");

const getAllReviews = async () => {
  const result = await Reviews.find(
    {},
    { user: 1, avatarURL: 1, date: 1, review: 1, isApprove: 1 }
  );
  return result;
};

const isApproveReviews = async (_id) => {
  const result = await Reviews.findOneAndUpdate(
    { _id },
    { isApprove: true },
    { new: true }
  );
  return result;
};
module.exports = {
  getAllReviews,
  isApproveReviews,
};
