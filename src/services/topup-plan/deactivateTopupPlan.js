const NotFoundError = require("../../errors/notfound.error");
const { topupPlanRepository } = require("../../repositories");

const deactivateTopupPlan = async (id) => {
  /**
   * Logic
   * 1. Get the topup plan by id
   * 2. Check if topup plan exists
   * 3. De-Activate the topup plan
   * 4. Return the deactivated topup plan
   */

  // Get the topup plan by id
  const topupPlan = await topupPlanRepository.getTopupPlanById(id);

  // Check if topup plan exists
  if (!topupPlan) {
    throw new NotFoundError("Topup Plan", id, {
      msg: "Topup Plan not found",
    });
  }

  // Activate the topup plan
  const deactivatedTopupPlan = await topupPlanRepository.deactivateTopupPlan(
    id
  );

  return deactivatedTopupPlan;
};

module.exports = deactivateTopupPlan;
