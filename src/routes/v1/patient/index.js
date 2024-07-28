const express = require("express");
const patientWalletRouter = require("./wallet.routes");
const patientTopupPlanRouter = require("./topup-plan.routes");

const patientRouter = express.Router();

patientRouter.use("/wallet", patientWalletRouter);
patientRouter.use("/topup-plan", patientTopupPlanRouter);

module.exports = patientRouter;
