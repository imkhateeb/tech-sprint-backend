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
