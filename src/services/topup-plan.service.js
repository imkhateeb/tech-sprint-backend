const activateTopupPlan = require("./topup-plan/activateTopupPlan");
const createTopupPlan = require("./topup-plan/createTopupPlan");
const deactivateTopupPlan = require("./topup-plan/deactivateTopupPlan");
const deleteTopupPlan = require("./topup-plan/deleteTopupPlan");
const getTopupPlanById = require("./topup-plan/getTopupPlanById");
const getTopupPlans = require("./topup-plan/getTopupPlans");
const updateTopupPlan = require("./topup-plan/updateTopupPlan");

const topupPlanService = {
  getTopupPlanById,
  createTopupPlan,
  getTopupPlans,
  activateTopupPlan,
  deactivateTopupPlan,
  updateTopupPlan,
  deleteTopupPlan,
};

module.exports = topupPlanService;
