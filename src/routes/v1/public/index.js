const express = require("express");
const {
  publicController,
  insuranceController,
} = require("../../../controllers");
const publicRouter = express.Router();

publicRouter.get("/doctors", publicController.getAllDoctors);
publicRouter.get("/clickable-banners", publicController.getAllActiveBanners);
publicRouter.get(
  "/insurance-providers",
  insuranceController.getInsuranceProviders
);

module.exports = publicRouter;
