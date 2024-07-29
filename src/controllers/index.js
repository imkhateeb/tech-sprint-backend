const abhaController = require("./abha.controller");
const authController = require("./auth.controller");
const insuranceController = require("./insurance.controller");
const publicController = require("./public.controller");
const topupPlanController = require("./topup-plan.controller");
const walletController = require("./wallet.controller");

module.exports = {
  authController,
  walletController,
  topupPlanController,
  publicController,
  insuranceController,
  abhaController,
};
