const { StatusCodes } = require("http-status-codes");

const { topupPlanService } = require("../services");

const createTopupPlan = async (req, res, next) => {
  try {
    const topupPlan = await topupPlanService.createTopupPlan(req.body);
    res.status(StatusCodes.CREATED).json({
      status: "success",
      msg: "Topup Plan created successfully",
      data: { topupPlan },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getTopupPlans = async (req, res, next) => {
  try {
    const topupPlans = await topupPlanService.getTopupPlans();
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Topup Plans fetched successfully",
      data: { topupPlans },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getTopupPlanById = async (req, res, next) => {
  try {
    const topupPlan = await topupPlanService.getTopupPlanById(
      req.params.planId
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Topup Plan fetched successfully",
      data: { topupPlan },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const activateTopupPlan = async (req, res, next) => {
  try {
    const activatedTopupPlan = await topupPlanService.activateTopupPlan(
      req.params.planId
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Topup Plan activated successfully",
      data: { activatedTopupPlan },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const deactivateTopupPlan = async (req, res, next) => {
  try {
    const deactivatedTopupPlan = await topupPlanService.deactivateTopupPlan(
      req.params.planId
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Topup Plan deactivated successfully",
      data: { deactivatedTopupPlan },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const updateTopupPlan = async (req, res, next) => {
  try {
    const updatedTopupPlan = await topupPlanService.updateTopupPlan(
      req.params.planId,
      req.body
    );
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Topup Plan updated successfully",
      data: { updatedTopupPlan },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const deleteTopupPlan = async (req, res, next) => {
  try {
    await topupPlanService.deleteTopupPlan(req.params.planId);
    res.status(StatusCodes.NO_CONTENT).json({
      status: "success",
      msg: "Topup Plan deleted successfully",
      data: {},
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const topupPlanController = {
  createTopupPlan,
  getTopupPlans,
  getTopupPlanById,
  activateTopupPlan,
  deactivateTopupPlan,
  updateTopupPlan,
  deleteTopupPlan,
};

module.exports = topupPlanController;
