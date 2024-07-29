const {
  InsuranceClaim,
  InsurancePolicy,
  InsuranceProvider,
} = require("../models");

// Insurance Provider
const createInsuranceProvider = async (insuranceProvider) => {
  return await InsuranceProvider.create(insuranceProvider);
};

const getInsuranceProviders = async () => {
  return await InsuranceProvider.find();
};

const getInsuranceProvider = async (filter) => {
  return await InsuranceProvider.findOne(filter);
};

// Insurance Policy
const createInsurancePolicy = async (insurancePolicy) => {
  return await InsurancePolicy.create(insurancePolicy);
};

const getInsurancePoliciesByUserId = async (userId) => {
  return await InsurancePolicy.find({ userId });
};

const getInsurancePolicyById = async (id) => {
  return await InsurancePolicy.findById(id);
};

// Insurance Claim
const createInsuranceClaim = async (insuranceClaim) => {
  return await InsuranceClaim.create(insuranceClaim);
};

const getInsuranceClaimsByUserId = async (userId) => {
  return await InsuranceClaim.find({ userId });
};

const getInsuranceClaimById = async (id) => {
  return await InsuranceClaim.findById(id);
};

const updateInsuranceClaim = async (id, insuranceClaim) => {
  return await InsuranceClaim.findByIdAndUpdate(id, insuranceClaim, {
    new: true,
  });
};

const insuranceRepository = {
  createInsuranceProvider,
  getInsuranceProviders,
  getInsuranceProvider,
  createInsurancePolicy,
  getInsurancePoliciesByUserId,
  getInsurancePolicyById,
  createInsuranceClaim,
  getInsuranceClaimsByUserId,
  getInsuranceClaimById,
  updateInsuranceClaim,
};

module.exports = insuranceRepository;
