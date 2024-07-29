const express = require("express");
const patientWalletRouter = require("./wallet.routes");
const patientTopupPlanRouter = require("./topup-plan.routes");
const patientInsuranceRouter = require("./insurance.routes");
const patientAbhaRouter = require("./abha.routes");

const patientRouter = express.Router();

patientRouter.use("/wallet", patientWalletRouter);
patientRouter.use("/topup-plan", patientTopupPlanRouter);
patientRouter.use("/insurance", patientInsuranceRouter);
patientRouter.use("/abha", patientAbhaRouter);

module.exports = patientRouter;
