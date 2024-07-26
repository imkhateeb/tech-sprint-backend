const { topupPlanRepository } = require("../../repositories");

const getTopupPlans = async () => {
  /**
   * Logic
   * 1. Get all topup plans
   * 2. Return the topup plans
   */

  // Get all topup plans
  const topupPlans = await topupPlanRepository.getTopupPlans({
    isActive: true,
  });

  return topupPlans;
};

module.exports = getTopupPlans;
