const express = require("express");

const adminTopupPlanRouter = express.Router();

const { topupPlanController } = require("../../../controllers");
const { adminValidator } = require("../../../validators");

adminTopupPlanRouter.get(
  "/",
  adminValidator,
  topupPlanController.getTopupPlans
);
adminTopupPlanRouter.get(
  "/:planId",
  adminValidator,
  topupPlanController.getTopupPlanById
);
adminTopupPlanRouter.post(
  "/",
  adminValidator,
  topupPlanController.createTopupPlan
);
adminTopupPlanRouter.put(
  "/:planId/activate",
  adminValidator,
  topupPlanController.activateTopupPlan
);
adminTopupPlanRouter.put(
  "/:planId/deactivate",
  adminValidator,
  topupPlanController.deactivateTopupPlan
);
adminTopupPlanRouter.patch(
  "/:planId",
  adminValidator,
  topupPlanController.updateTopupPlan
);
adminTopupPlanRouter.delete(
  "/:planId",
  adminValidator,
  topupPlanController.deleteTopupPlan
);

module.exports = adminTopupPlanRouter;
