const express = require("express");
const { getReviewsController } = require("../../controllers/reviews");

const { catchErrors } = require("../../middlewares/catch-errors");

const router = express.Router();

router.get("/", catchErrors(getReviewsController));

module.exports = router;
