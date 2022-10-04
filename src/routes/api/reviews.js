const express = require("express");
const {
  getReviewsController,
  isApproveReviewsController,
  addReviewsController,
  removeReviewsController,
} = require("../../controllers/reviews");

const { catchErrors } = require("../../middlewares/catch-errors");

const router = express.Router();

router.get("/", catchErrors(getReviewsController));
router.post("/newreview", catchErrors(addReviewsController));
router.post("/isapprove/:reviewId", catchErrors(isApproveReviewsController));
router.delete("/:reviewDelId", catchErrors(removeReviewsController));

module.exports = router;
