const express = require("express");

const patientWalletRouter = express.Router();
const { walletController } = require("../../../controllers");
const { patientValidator } = require("../../../validators");
const { StatusCodes } = require("http-status-codes");

patientWalletRouter.get("/check", (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "Your wallet route is working fine",
    data: {},
    error: {},
  });
});

patientWalletRouter.post("/", patientValidator, walletController.createWallet);

patientWalletRouter.get(
  "/by-patient",
  patientValidator,
  walletController.getWalletByUserId
);

patientWalletRouter.patch(
  "/activate",
  patientValidator,
  walletController.activateWallet
);

patientWalletRouter.patch(
  "/deactivate",
  patientValidator,
  walletController.deactivateWallet
);

patientWalletRouter.patch(
  "/top-up",
  patientValidator,
  walletController.creditToWallet
);

patientWalletRouter.post(
  "/top-up/:planId",
  patientValidator,
  walletController.takeTopupPlan
);

patientWalletRouter.post(
  "/pay/:doctorId",
  patientValidator,
  walletController.makePaymentToDoctor
);

module.exports = patientWalletRouter;
