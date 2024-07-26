const {
  getWalletByUserId,
  getWalletByWalletId,
  getWallets,
} = require("./wallet/getWallet");

const createWallet = require("./wallet/createWallet");
const creditToWallet = require("./wallet/creditToWallet");
const debitFromWallet = require("./wallet/debitFromWallet");
const activateWallet = require("./wallet/activateWallet");
const deactivateWallet = require("./wallet/deactivateWallet");
const makePaymentToDoctor = require("./wallet/makePaymentToDoctor");
const takeTopupPlan = require("./wallet/takeTopupPlan");

const walletService = {
  getWalletByUserId,
  getWalletByWalletId,
  getWallets,
  createWallet,
  creditToWallet,
  debitFromWallet,
  activateWallet,
  deactivateWallet,
  makePaymentToDoctor,
  takeTopupPlan,
};

module.exports = walletService;
