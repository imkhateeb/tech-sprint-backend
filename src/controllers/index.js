const authController = require("./auth.controller");
const publicController = require("./public.controller");
const topupPlanController = require("./topup-plan.controller");
const walletController = require("./wallet.controller");

module.exports = {
  authController,
  walletController,
  topupPlanController,
  publicController,
};
