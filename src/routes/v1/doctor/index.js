const express = require("express");
const doctorWalletRouter = require("./wallet.routes");

const doctorRouter = express.Router();

doctorRouter.use("/wallet", doctorWalletRouter);

module.exports = doctorRouter;
