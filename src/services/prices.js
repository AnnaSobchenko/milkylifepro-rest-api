const { Prices } = require("../db/pricesModel");

const getAllPrices = async () => {
  const result = await Prices.find(
    {},
    { title: 1, price: 1, online: 1, period: 1, description: 1 }
  );
  return result;
};
module.exports = {
  getAllPrices,
};
