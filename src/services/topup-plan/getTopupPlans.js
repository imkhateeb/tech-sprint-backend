const { topupPlanRepository } = require("../../repositories");

const getTopupPlans = async (user) => {
  /**
   * Logic
   * 1. Get all topup plans according to the user role
   * 2. Return the topup plans
   */

  // Get all topup plans
  let topupPlans = [];
  if (user.role === "admin") {
    topupPlans = await topupPlanRepository.getTopupPlans({});
  } else {
    topupPlans = await topupPlanRepository.getTopupPlans({
      isActive: true,
    });
  }
  return topupPlans;
};

module.exports = getTopupPlans;
