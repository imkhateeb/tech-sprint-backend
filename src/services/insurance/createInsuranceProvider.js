const ConflictError = require("../../errors/conflict.error");
const ValidationError = require("../../errors/validation.error");
const { insuranceRepository } = require("../../repositories");

const createInsuranceProvider = async (insuranceProvider, user) => {
  /***
   * Logic
   * 1. Input validation
   * 2. Verify it from - INSURANCE PROVIDER API
   * 3. Check if the insurance provider already exists
   * 4. If it does, return an error
   * 5. If it doesn't, create the insurance provider
   */

  // 1 Input validation
  if (!insuranceProvider?.name) {
    throw new ValidationError({
      msg: "Name is required",
    });
  }

  // 3
  const existingInsuranceProvider =
    await insuranceRepository.getInsuranceProvider({
      name: insuranceProvider.name,
    });

  // 4
  if (existingInsuranceProvider) {
    throw new ConflictError("Insurance Provider", {
      msg: "Insurance provider already exists",
    });
  }

  // 5
  return await insuranceRepository.createInsuranceProvider({
    name: insuranceProvider.name,
    logo: insuranceProvider.logo || "",
  });
};

module.exports = createInsuranceProvider;
