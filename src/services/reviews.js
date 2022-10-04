const { Reviews } = require("../db/reviewsModel");

const getAllReviews = async () => {
  const result = await Reviews.find(
    {},
    { name: 1, avatarURL: 1, date: 1, review: 1, isApprove: 1, _id: 1 }
  );
  return result;
};

const isApproveReviews = async ({ reviewId }) => {
  const result = await Reviews.findOneAndUpdate(
    { _id: reviewId },
    { isApprove: true },
    { new: true }
  );
  return result;
};
const addReviews = async (body) => {
  const { name, avatarURL, review } = body;
  const result = await Reviews.create({ name, avatarURL, review });
  return result;
};

const removeReview = async ( {reviewDelId}) => {
  const _id = reviewDelId;
  const result = await Reviews.findOneAndDelete({_id});
  return result;
};

module.exports = {
  getAllReviews,
  isApproveReviews,
  addReviews,
  removeReview,
};
