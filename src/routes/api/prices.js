const express = require("express");
const { getPricesController } = require("../../controllers/prices");
const {
    catchErrors
  } = require("../../middlewares/catch-errors");

  const router = express.Router();

  router.get("/", catchErrors(getPricesController));

  module.exports = router;