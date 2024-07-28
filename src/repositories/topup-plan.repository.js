const { TopupPlan } = require("../models");

const createTopupPlan = async (topupPlanData) => {
  const topupPlan = await TopupPlan.create(topupPlanData);
  return topupPlan;
};

const getTopupPlanById = async (id) => {
  return await TopupPlan.findById(id);
};

const getTopupPlans = async (data) => {
  return await TopupPlan.find(data);
};

const updateTopupPlan = async (id, topupPlanData) => {
  return await TopupPlan.findByIdAndUpdate(id, topupPlanData, { new: true });
};

const deleteTopupPlan = async (id) => {
  return await TopupPlan.findByIdAndDelete(id);
};

const activateTopupPlan = async (id) => {
  return await TopupPlan.findByIdAndUpdate(
    id,
    { isActive: true },
    { new: true }
  );
};

const deactivateTopupPlan = async (id) => {
  return await TopupPlan.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};

const getTopupPlanByName = async (name) => {
  return await TopupPlan.findOne({ name });
};

const topupPlanRepository = {
  createTopupPlan,
  getTopupPlanById,
  getTopupPlans,
  updateTopupPlan,
  deleteTopupPlan,
  activateTopupPlan,
  deactivateTopupPlan,
  getTopupPlanByName,
};

module.exports = topupPlanRepository;
