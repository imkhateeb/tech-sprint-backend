const express = require("express");
const adminTopupPlanRouter = require("./topup-plan.routes");
const adminWalletRouter = require("./wallet.routes");
const adminInsuranceRouter = require("./insurance.routes");
const adminClickableBannerRouter = require("./clickable-banner.routes");

const adminRouter = express.Router();

adminRouter.use("/topup-plan", adminTopupPlanRouter);
adminRouter.use("/wallet", adminWalletRouter);
adminRouter.use("/insurance", adminInsuranceRouter);
adminRouter.use("/clickable-banner", adminClickableBannerRouter);

module.exports = adminRouter;
