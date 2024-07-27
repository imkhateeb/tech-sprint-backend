const express = require("express");
const { walletController } = require("../../../controllers");
const { doctorValidator } = require("../../../validators");
const { StatusCodes } = require("http-status-codes");

const doctorWalletRouter = express.Router();

doctorWalletRouter.get("/check", (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "Your wallet route is working fine",
    data: {},
    error: {},
  });
});

doctorWalletRouter.post("/", doctorValidator, walletController.createWallet);
doctorWalletRouter.get(
  "/by-doctor",
  doctorValidator,
  walletController.getWalletByUserId
);
doctorWalletRouter.patch(
  "/activate",
  doctorValidator,
  walletController.activateWallet
);
doctorWalletRouter.patch(
  "/deactivate",
  doctorValidator,
  walletController.deactivateWallet
);
doctorWalletRouter.patch(
  "/withdraw",
  doctorValidator,
  walletController.debitFromWallet
);

module.exports = doctorWalletRouter;
