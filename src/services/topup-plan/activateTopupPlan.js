const NotFoundError = require("../../errors/notfound.error");
const { topupPlanRepository } = require("../../repositories");

const activateTopupPlan = async (topupPlanId) => {
  /**
   * Logic
   * 1. Get the topup plan by id
   * 2. Check if topup plan exists
   * 3. Activate the topup plan
   * 4. Return the activated topup plan
   */

  // Get the topup plan by id
  const topupPlan = await topupPlanRepository.getTopupPlanById(topupPlanId);

  // Check if topup plan exists
  if (!topupPlan) {
    throw new NotFoundError("Topup Plan", topupPlanId, {
      msg: "Topup Plan not found",
    });
  }

  // Activate the topup plan
  const activatedTopupPlan = await topupPlanRepository.activateTopupPlan(
    topupPlanId
  );

  return activatedTopupPlan;
};

module.exports = activateTopupPlan;
