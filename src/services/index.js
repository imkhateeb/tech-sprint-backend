const abhaService = require("./abha.service");
const authService = require("./auth.service");
const clickableBannerService = require("./clickable-banner.service");
const insuranceService = require("./insurance.service");
const publicService = require("./public.service");
const topupPlanService = require("./topup-plan.service");
const walletService = require("./wallet.service");

module.exports = {
  authService,
  walletService,
  topupPlanService,
  publicService,
  insuranceService,
  abhaService,
  clickableBannerService,
};
