const express = require("express");
const {
  getReviewsController,
  isApproveReviewsController,
} = require("../../controllers/reviews");

const { catchErrors } = require("../../middlewares/catch-errors");

const router = express.Router();

router.get("/", catchErrors(getReviewsController));
router.post("/isapprove", catchErrors(isApproveReviewsController));

module.exports = router;
