const express = require("express");
const { patientValidator } = require("../../../validators");
const { insuranceController } = require("../../../controllers");

const patientInsuranceRouter = express.Router();

// Claim Routes
patientInsuranceRouter.post(
  "/claim",
  patientValidator,
  insuranceController.createInsuranceClaim
);

patientInsuranceRouter.get(
  "/claims",
  patientValidator,
  insuranceController.getInsuranceClaimsByUserId
);

patientInsuranceRouter.get(
  "/claim/:claimId",
  patientValidator,
  insuranceController.getInsuranceClaimById
);

patientInsuranceRouter.put(
  "/claim/:claimId",
  patientValidator,
  insuranceController.updateInsuranceClaim
);

// Policy Routes
patientInsuranceRouter.post(
  "/policy",
  patientValidator,
  insuranceController.createInsurancePolicy
);

patientInsuranceRouter.get(
  "/policies",
  patientValidator,
  insuranceController.getInsurancePoliciesByUserId
);

patientInsuranceRouter.get(
  "/policy/:policyId",
  patientValidator,
  insuranceController.getInsurancePolicyById
);

patientInsuranceRouter.put(
  "/policy/:policyId",
  patientValidator,
  insuranceController.updateInsurancePolicy
);

patientInsuranceRouter.delete(
  "/policy/:policyId",
  patientValidator,
  insuranceController.deleteInsurancePolicy
);

module.exports = patientInsuranceRouter;
