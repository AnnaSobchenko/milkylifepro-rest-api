const mongoose = require("mongoose");

const pricesSchema = new mongoose.Schema({
  title: {
    type: String,    
  },
  price: {
    type: String,    
  },
  online: {
    type: String,   
  },
  period: {
    type: String,
   
  },
  description: {
    type: String,
    default: null,
  }
});

const Prices = mongoose.model("prices", pricesSchema);

module.exports = {
 Prices,
};