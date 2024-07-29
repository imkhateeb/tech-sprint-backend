const { insuranceRepository } = require("../../repositories");

const getInsurancePoliciesByUserId = async (user) => {
  /**
   * Logic
   * 1. Get insurance policies by user id
   * 2. Return policies
   */

  // 1
  const insurancePolicies =
    await insuranceRepository.getInsurancePoliciesByUserId(user._id);

  // 2
  return insurancePolicies;
};

module.exports = getInsurancePoliciesByUserId;
