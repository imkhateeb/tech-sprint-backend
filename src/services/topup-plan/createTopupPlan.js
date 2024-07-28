const ConflictError = require("../../errors/conflict.error");
const ValidationError = require("../../errors/validation.error");
const { topupPlanRepository } = require("../../repositories");

const createTopupPlan = async ({
  name,
  amount,
  description,
  bonus,
  coupons,
  freeVideoConsultations,
  freeChatConsultations,
}) => {
  /**
   * Logic
   * 1. Validate the input
   * 2. Create a new topup plan
   * 3. Return the new topup plan
   */

  // Validate the input
  if (!name) {
    throw new ValidationError({
      msg: "Name is required",
    });
  }
  if (name !== "Plant" && name !== "Tree" && name !== "Forest") {
    throw new ValidationError({
      msg: "Name should be one of Plant, Tree, or Forest",
    });
  }
  if (!amount) {
    throw new ValidationError({
      msg: "Amount is required",
    });
  }
  if (!description) {
    throw new ValidationError({
      msg: "Description is required",
    });
  }

  const isPlanExist = await topupPlanRepository.getTopupPlanByName(name);
  if (isPlanExist) {
    throw new ConflictError("Topup Plan", {
      msg: `Plan with name '${name}' already exist!`,
    });
  }

  // Create a new topup plan
  const newTopupPlan = {
    name,
    amount,
    description,
    bonus,
    coupons,
    freeVideoConsultations,
    freeChatConsultations,
  };

  const createdTopupPlan = await topupPlanRepository.createTopupPlan(
    newTopupPlan
  );
  return createdTopupPlan;
};

module.exports = createTopupPlan;
