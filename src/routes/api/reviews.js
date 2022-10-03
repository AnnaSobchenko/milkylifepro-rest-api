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
router.post("/", catchErrors(addReviewsController));
router.post("/isapprove", catchErrors(isApproveReviewsController));
router.delete("/", catchErrors(removeReviewsController));

module.exports = router;
