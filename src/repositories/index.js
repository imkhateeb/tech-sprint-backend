const abhaRepository = require("./abha.repository");
const authRepository = require("./auth.repository");
const insuranceRepository = require("./insurance.repository");
const publicRepository = require("./public.repository");
const topupPlanRepository = require("./topup-plan.repository");
const walletRepository = require("./wallet.repository");

module.exports = {
  authRepository,
  walletRepository,
  topupPlanRepository,
  publicRepository,
  insuranceRepository,
  abhaRepository,
};
