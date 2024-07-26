const authRepository = require("./auth.repository");
const publicRepository = require("./public.repository");
const topupPlanRepository = require("./topup-plan.repository");
const walletRepository = require("./wallet.repository");

module.exports = {
  authRepository,
  walletRepository,
  topupPlanRepository,
  publicRepository,
};
