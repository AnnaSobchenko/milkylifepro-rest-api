const { getAllReviews, isApproveReviews } = require("../services/reviews");

const getReviewsController = async (req, res, next) => {
  const reviews = await getAllReviews();
  res.status(200).send(reviews);
};
const isApproveReviewsController = async (req, res, next) => {
  const review = await isApproveReviews(req.body);
  res.status(200).send(review);
};
module.exports = { getReviewsController, isApproveReviewsController };
