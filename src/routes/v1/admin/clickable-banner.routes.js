const express = require("express");
const { clickableBannerController } = require("../../../controllers");
const adminValidator = require("../../../validators/admin.validator");

const adminClickableBannerRouter = express.Router();

adminClickableBannerRouter.post(
  "/",
  adminValidator,
  clickableBannerController.createClickableBanner
);
adminClickableBannerRouter.get(
  "/",
  clickableBannerController.getClickableBanners
);
adminClickableBannerRouter.patch(
  "/:bannerId/activate",
  adminValidator,
  clickableBannerController.activateClicableBanner
);
adminClickableBannerRouter.patch(
  "/:bannerId/deactivate",
  adminValidator,
  clickableBannerController.deactivateClickableBanner
);
adminClickableBannerRouter.delete(
  "/:bannerId",
  adminValidator,
  clickableBannerController.deleteClickableBanner
);

module.exports = adminClickableBannerRouter;
