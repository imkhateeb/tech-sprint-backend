const express = require("express");

const patientTopupPlanRouter = express.Router();

const { patientValidator } = require("../../../validators");
const { topupPlanController } = require("../../../controllers");

patientTopupPlanRouter.get(
  "/",
  patientValidator,
  topupPlanController.getTopupPlans
);
patientTopupPlanRouter.get(
  "/:planId",
  patientValidator,
  topupPlanController.getTopupPlanById
);

module.exports = patientTopupPlanRouter;
