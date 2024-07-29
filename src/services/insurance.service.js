const createInsuranceClaim = require("./insurance/createInsuranceClaim");
const createInsurancePolicy = require("./insurance/createInsurancePolicy");
const createInsuranceProvider = require("./insurance/createInsuranceProvider");
const getInsuranceClaim = require("./insurance/getInsuranceClaim");
const getInsuranceClaimsByUserId = require("./insurance/getInsuranceClaimsByUserId");
const getInsurancePoliciesByUserId = require("./insurance/getInsurancePoliciesByUserId");
const getInsurancePolicy = require("./insurance/getInsurancePolicy");
const getInsuranceProvider = require("./insurance/getInsuranceProvider");
const getInsuranceProviders = require("./insurance/getInsuranceProviders");
const updateInsuranceClaim = require("./insurance/updateInsuranceClaim");

const insuranceService = {
  createInsuranceProvider,
  createInsurancePolicy,
  createInsuranceClaim,

  getInsuranceProviders,
  getInsurancePoliciesByUserId,
  getInsuranceClaimsByUserId,

  getInsuranceProvider,
  getInsuranceClaim,
  getInsurancePolicy,

  updateInsuranceClaim,
};

module.exports = insuranceService;
