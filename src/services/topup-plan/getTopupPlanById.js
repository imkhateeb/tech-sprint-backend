const { topupPlanRepository } = require("../../repositories");
const NotFoundError = require("../../errors/notfound.error");

const getTopupPlanById = async (id) => {
  /**
   * Logic
   * 1. Get the topup plan by id
   * 2. Check if topup plan exists
   * 2. Return the topup plan
   */

  // Get the topup plan by id
  const topupPlan = await topupPlanRepository.getTopupPlanById(id);

  // Check if topup plan exists
  if (!topupPlan) {
    throw new NotFoundError("Topup Plan", id, {
      msg: "Topup Plan not found",
    });
  }

  return topupPlan;
};

module.exports = getTopupPlanById;
