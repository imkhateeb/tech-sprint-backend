const express = require("express");
const adminValidator = require("../../../validators/admin.validator");
const { insuranceController } = require("../../../controllers");

const adminInsuranceRouter = express.Router();

adminInsuranceRouter.post(
  "/",
  adminValidator,
  insuranceController.createInsuranceProvider
);
adminInsuranceRouter.get(
  "/",
  adminValidator,
  insuranceController.getInsuranceProviders
);
adminInsuranceRouter.get(
  "/:providerId",
  adminValidator,
  insuranceController.getInsuranceProvider
);
adminInsuranceRouter.put(
  "/:providerId",
  adminValidator,
  insuranceController.updateInsuranceProvider
);
adminInsuranceRouter.delete(
  "/:providerId",
  adminValidator,
  insuranceController.deleteInsuranceProvider
);

module.exports = adminInsuranceRouter;
