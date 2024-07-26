const express = require("express");
const { walletController } = require("../../../controllers");
const { doctorValidator } = require("../../../validators");

const doctorWalletRouter = express.Router();

doctorWalletRouter.get("/ping", (req, res) => {
  res.send("pong");
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
