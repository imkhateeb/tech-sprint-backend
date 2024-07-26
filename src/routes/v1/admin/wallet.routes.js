const express = require("express");
const { adminValidator } = require("../../../validators");
const { walletController } = require("../../../controllers");

const adminWalletRouter = express.Router();

adminWalletRouter.get("/", adminValidator, walletController.getWallets);
adminWalletRouter.get(
  "/:walletId",
  adminValidator,
  walletController.getWalletByWalletId
);

module.exports = adminWalletRouter;
