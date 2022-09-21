const { Reviews } = require("../db/reviewsModel");

const getAllReviews = async () => {
  const result = await Reviews.find(
    {},
    { user: 1, avatarURL: 1, date: 1, review: 1 }
  );
  return result;
};
module.exports = {
  getAllReviews,
};
