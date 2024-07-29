const { insuranceRepository } = require("../../repositories");

const getInsuranceProviders = async (user) => {
  /**
   * Logic
   * 1. Get data
   * 2. Return data
   */

  return await insuranceRepository.getInsuranceProviders();
};

module.exports = getInsuranceProviders;
