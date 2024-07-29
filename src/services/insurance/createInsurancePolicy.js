const ConflictError = require("../../errors/conflict.error");
const ValidationError = require("../../errors/validation.error");
const { insuranceRepository } = require("../../repositories");
const insuranceService = require("../insurance.service");

const createInsurancePolicy = async (insurancePolicy, user) => {
  /**
   * Logic
   * 1. Input Validation
   * 2. Check if a valid POLICYID - BY INSURANCE PROVIDERS API
   * 3. Check if provider is valid
   * 4. Check if policy exists
   * 5. Create policy
   * 6. Return policy
   */

  // 1
  if (!insurancePolicy?.policyId) {
    throw new ValidationError({
      msg: "Policy ID is required",
    });
  }
  if (!insurancePolicy?.provider) {
    throw new ValidationError({
      msg: "Provider is required",
    });
  }
  if (!insurancePolicy?.coverageDetails) {
    throw new ValidationError({
      msg: "Coverage details is required",
    });
  }
  if (!insurancePolicy?.premiumAmount) {
    throw new ValidationError({
      msg: "Premium amount is required",
    });
  }
  if (!insurancePolicy?.expiryDate) {
    throw new ValidationError({
      msg: "Expiry date is required",
    });
  }

  // 2 -> This will be done later

  // 3
  const insuranceProvider = await insuranceRepository.getInsuranceProvider({
    _id: insurancePolicy?.provider,
  });
  if (!insuranceProvider) {
    throw new ValidationError({
      msg: "Invalid provider",
    });
  }

  // 4
  const isPolicyExists = await insuranceRepository.getInsuranceProvider({
    policyId: insurancePolicy?.policyId,
  });
  if (isPolicyExists) {
    throw new ConflictError("Insurance Policy", {
      msg: "Insurance policy already exists",
    });
  }

  // 5
  const policy = await insuranceRepository.createInsurancePolicy({
    userId: user._id,
    policyId: insurancePolicy?.policyId,
    provider: insurancePolicy?.provider,
    coverageDetails: insurancePolicy?.coverageDetails,
    premiumAmount: insurancePolicy?.premiumAmount,
    expiryDate: insurancePolicy?.expiryDate,
    purchaseDate: insurancePolicy?.purchaseDate || new Date(),
  });

  // 6
  return policy;
};

module.exports = createInsurancePolicy;
