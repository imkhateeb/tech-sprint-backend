const express = require("express");
const adminTopupPlanRouter = require("./topup-plan.routes");
const adminWalletRouter = require("./wallet.routes");
const adminInsuranceRouter = require("./insurance.routes");

const adminRouter = express.Router();

adminRouter.use("/topup-plan", adminTopupPlanRouter);
adminRouter.use("/wallet", adminWalletRouter);
adminRouter.use("/insurance", adminInsuranceRouter);

module.exports = adminRouter;
