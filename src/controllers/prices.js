const { getAllPrices } = require("../services/prices");

const getPricesController = async (req, res, next) => {
  const prices = await getAllPrices();
  res.status(200).send(prices);
};
module.exports = { getPricesController };
