const express = require("express");
const patientWalletRouter = require("./wallet.routes");

const patientRouter = express.Router();

patientRouter.use("/wallet", patientWalletRouter);

module.exports = patientRouter;
