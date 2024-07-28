const { topupPlanRepository } = require("../../repositories");
const NotFoundError = require("../../errors/notfound.error");
const ForbiddenError = require("../../errors/forbidden.error");

const getTopupPlanById = async (id, user) => {
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

  if (user.role === "patient" && !topupPlan.isActive) {
    throw new ForbiddenError("view", "Topup Plan", {
      msg: "You are not allowed to view this topup plan",
    });
  }

  return topupPlan;
};

module.exports = getTopupPlanById;
