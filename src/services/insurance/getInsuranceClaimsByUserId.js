const { insuranceRepository } = require("../../repositories");

const getInsuranceClaimsByUserId = async (user) => {
  /**
   * Logic
   * 1. Get insurance claims by user id
   * 2. Return claims
   */

  // 1
  const insuranceClaims = await insuranceRepository.getInsuranceClaimsByUserId(
    user._id
  );

  // 2
  return insuranceClaims;
};

module.exports = getInsuranceClaimsByUserId;
