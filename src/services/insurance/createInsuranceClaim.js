const NotFoundError = require("../../errors/notfound.error");
const ValidationError = require("../../errors/validation.error");
const { insuranceRepository } = require("../../repositories");

const createInsuranceClaim = async (insuranceClaim, user) => {
  /***
   * Logic
   * 1. Input validation
   * 2. Check if the policy exists
   * 3. Check if the policy is active
   * 4. Submit insurance claim with ABHA - External INSURANCE PROVIDERS API
   * 5. Save insurance claim
   * 6. Return insurance claim
   */

  // 1
  if (!insuranceClaim?.policyId) {
    throw new ValidationError({
      msg: "Policy ID is required",
    });
  }
  if (!insuranceClaim?.amount) {
    throw new ValidationError({
      msg: "Amount is required",
    });
  }
  if (!insuranceClaim?.description) {
    throw new ValidationError({
      msg: "Description is required",
    });
  }

  // 2
  const policy = await insuranceRepository.getInsurancePolicyById(
    insuranceClaim.policyId
  );
  if (!policy) {
    throw new NotFoundError("Insurance Policy", insuranceClaim.policyId, {
      msg: "Policy not found",
    });
  }

  // 3
  if (!(policy.status === "active")) {
    throw new ValidationError({
      msg: "Policy is not active",
    });
  }

  // 4 -> We can add this logic later

  // 5 -> This object will be filled according to the response from the external API
  const claim = await insuranceRepository.createInsuranceClaim({
    userId: user._id,
    policyId: insuranceClaim.policyId,
    claimId: "CLAIM-" + Date.now(),
    abhaId: user?.abhaId || "",
    amount: insuranceClaim.amount,
    description: insuranceClaim.description,
  });

  // 6
  return claim;
};

module.exports = createInsuranceClaim;
