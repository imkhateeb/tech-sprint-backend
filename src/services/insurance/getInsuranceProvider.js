const ValidationError = require("../../errors/validation.error");
const NotFoundError = require("../../errors/notfound.error");
const { insuranceRepository } = require("../../repositories");

const getInsuranceProvider = async (id) => {
  /**
   * Logic
   * 1. Input validation
   * 2. Get the insurance provider by id
   * 3. Check if insurance provider exists
   * 4. If it does, return the insurance provider
   * 5. If it doesn't, return an error
   */

  // 1
  if (!id) {
    throw new ValidationError({
      msg: "Insurance Provider ID is required",
    });
  }

  // 2
  const insuranceProvider = await insuranceRepository.getInsuranceProvider({
    _id: id,
  });

  // 3 and 5
  if (!insuranceProvider) {
    throw new NotFoundError("Insurance Provider", id, {
      msg: "Insurance Provider not found",
    });
  }

  // 4
  return insuranceProvider;
};

module.exports = getInsuranceProvider;
