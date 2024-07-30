const { StatusCodes } = require("http-status-codes");
const { insuranceService } = require("../services");
const NotImplemented = require("../errors/notimplemented.error");

const createInsuranceProvider = async (req, res, next) => {
  try {
    const insuranceProvider = await insuranceService.createInsuranceProvider(
      req.body,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance provider created",
      data: { insuranceProvider },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getInsuranceProviders = async (req, res, next) => {
  try {
    const insuranceProviders = await insuranceService.getInsuranceProviders();
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance providers fetched successfully",
      data: { insuranceProviders },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getInsuranceProvider = async (req, res, next) => {
  try {
    const insuranceProvider = await insuranceService.getInsuranceProvider(
      req.params.providerId,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance provider fetched successfully",
      data: { insuranceProvider },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const updateInsuranceProvider = async (req, res, next) => {
  try {
    throw new NotImplemented("UpdateInsuranceProvider", {
      msg: "Update insurance provider is not implemented",
    });
  } catch (error) {
    next(error);
  }
};

const deleteInsuranceProvider = async (req, res, next) => {
  try {
    throw new NotImplemented("DeleteInsuranceProvider", {
      msg: "Delete insurance provider is not implemented",
    });
  } catch (error) {
    next(error);
  }
};

// Policy
const createInsurancePolicy = async (req, res, next) => {
  try {
    const insurancePolicy = await insuranceService.createInsurancePolicy(
      req.body,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance policy created",
      data: { insurancePolicy },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getInsurancePoliciesByUserId = async (req, res, next) => {
  try {
    const insurancePolicies =
      await insuranceService.getInsurancePoliciesByUserId(req.user);
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance policies fetched successfully",
      data: { insurancePolicies },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getInsurancePolicyById = async (req, res, next) => {
  try {
    const insurancePolicy = await insuranceService.getInsurancePolicy(
      req.params.policyId,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance policy fetched successfully",
      data: { insurancePolicy },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const updateInsurancePolicy = async (req, res, next) => {
  try {
    throw new NotImplemented("UpdateInsurancePolicy", {
      msg: "Update insurance policy is not implemented",
    });
  } catch (error) {
    next(error);
  }
};

const deleteInsurancePolicy = async (req, res, next) => {
  try {
    throw new NotImplemented("DeleteInsurancePolicy", {
      msg: "Delete insurance policy is not implemented",
    });
  } catch (error) {
    next(error);
  }
};

const createInsuranceClaim = async (req, res, next) => {
  try {
    const insuranceClaim = await insuranceService.createInsuranceClaim(
      req.body,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance claim created",
      data: { insuranceClaim },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getInsuranceClaimsByUserId = async (req, res, next) => {
  try {
    const insuranceClaims = await insuranceService.getInsuranceClaimsByUserId(
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance claims fetched successfully",
      data: { insuranceClaims },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getInsuranceClaimById = async (req, res, next) => {
  try {
    const insuranceClaim = await insuranceService.getInsuranceClaim(
      req.params.claimId,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance claim fetched successfully",
      data: { insuranceClaim },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const updateInsuranceClaim = async (req, res, next) => {
  try {
    const insuranceClaim = await insuranceService.updateInsuranceClaim(
      req.params.claimId,
      req.body,
      req.user
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Insurance claim updated successfully",
      data: { insuranceClaim },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const insuranceController = {
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
  updateInsuranceProvider,
  updateInsurancePolicy,
  deleteInsuranceProvider,
  deleteInsurancePolicy,
};

module.exports = insuranceController;
