const {
  getAllReviews,
  isApproveReviews,
  addReviews,
  removeReview,
} = require("../services/reviews");

const getReviewsController = async (req, res, next) => {
  const reviews = await getAllReviews();
  res.status(200).send(reviews);
};
const isApproveReviewsController = async (req, res, next) => {
  const review = await isApproveReviews(req.body);
  res.status(200).send(review);
};
const addReviewsController = async (req, res, next) => {
  const review = await addReviews(req.body);
  res.status(200).send(review);
};

const removeReviewsController = async (req, res, next) => {
  await removeReview(req.body);
  res.sendStatus(204);
};

module.exports = {
  getReviewsController,
  isApproveReviewsController,
  addReviewsController,
  removeReviewsController,
};
