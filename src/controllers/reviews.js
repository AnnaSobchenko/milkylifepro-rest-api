const { getAllReviews } = require("../services/reviews");

const getReviewsController = async (req, res, next) => {
  const reviews = await getAllReviews();
  res.status(200).send(reviews);
};
module.exports = { getReviewsController };
