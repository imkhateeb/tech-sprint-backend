const NotFoundError = require("../../errors/notfound.error");
const ValidationError = require("../../errors/validation.error");
const { insuranceRepository } = require("../../repositories");

const getInsuranceClaim = async (claimId, user) => {
  /***
   * Logic
   * 1. Input Validation
   * 2. Get insurance claim by claim id
   * 3. Check if the claim exists
   * 4. Return insurance claim
   */

  // 1
  if (!claimId) {
    throw new ValidationError({
      msg: "Claim ID is required",
    });
  }

  // 2
  const insuranceClaim = await insuranceRepository.getInsuranceClaimById(
    claimId
  );

  // 3
  if (!insuranceClaim) {
    throw new NotFoundError("Insurance Claim", claimId, {
      msg: "Claim not found",
    });
  }

  // 4
  return insuranceClaim;
};

module.exports = getInsuranceClaim;
