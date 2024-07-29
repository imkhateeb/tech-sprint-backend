const NotFoundError = require("../../errors/notfound.error");
const ValidationError = require("../../errors/validation.error");
const { insuranceRepository } = require("../../repositories");

const getInsurancePolicy = async (policyId, user) => {
  /**
   * LOGIC
   * 1. Input Validation
   * 2. Check if policy exists
   * 3. Check if user has access to the policy
   */

  // 1
  if (!policyId) {
    throw new ValidationError({
      msg: "Policy ID is required",
    });
  }

  // 2
  const insurancePolicy = await insuranceRepository.getInsurancePolicyById(
    policyId
  );

  // 3
  if (!insurancePolicy) {
    throw new NotFoundError("Insurance Policy ", policyId, {
      msg: "Policy not found",
    });
  }

  // 4
  return insurancePolicy;
};

module.exports = getInsurancePolicy;
