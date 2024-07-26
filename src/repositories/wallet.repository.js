const { Wallet, TopupPlan } = require("../models");

const createWallet = async (walletData) => {
  return await Wallet.create(walletData);
};

const getWalletByUserId = async (userId) => {
  return await Wallet.findOne({ userId });
};

const getWalletByWalletId = async (walletId) => {
  return await Wallet.findOne({ walletId });
};

const getWallets = async (role) => {
  if (role) {
    return await Wallet.find({ role });
  } else {
    return await Wallet.find();
  }
};

const activateWallet = async (walletId) => {
  return await Wallet.findByIdAndUpdate(
    walletId,
    { isActivated: true },
    { new: true }
  );
};

const deactivateWallet = async (walletId) => {
  return await Wallet.findByIdAndUpdate(
    walletId,
    { isActivated: false },
    { new: true }
  );
};

const creditToWallet = async (walletId, amount, transactionData) => {
  return await Wallet.findByIdAndUpdate(
    walletId,
    {
      $inc: { balance: amount },
      $push: { transactions: transactionData },
    },
    { new: true }
  );
};

const debitFromWallet = async (walletId, amount, transactionData) => {
  return await Wallet.findByIdAndUpdate(
    walletId,
    {
      $inc: { balance: -amount },
      $push: { transactions: transactionData },
    },
    { new: true }
  );
};

const makePaymentToDoctor = async (
  patientWalletId,
  doctorWalletId,
  patientTransactionData,
  doctorTransactionData,
  amount
) => {
  const updatedPatientWallet = await Wallet.findByIdAndUpdate(
    patientWalletId,
    {
      $inc: { balance: -amount },
      $push: { transactions: patientTransactionData },
    },
    { new: true }
  );

  await Wallet.findByIdAndUpdate(
    doctorWalletId,
    {
      $inc: { balance: amount },
      $push: { transactions: doctorTransactionData },
    },
    { new: true }
  );

  return updatedPatientWallet;
};

const getTopupPlanDetails = async (planId) => {
  return await TopupPlan.findById(planId);
};

const takeTopupPlan = async (walletId, amount, perks, transactionData) => {
  return await Wallet.findByIdAndUpdate(
    walletId,
    {
      $inc: { balance: amount },
      $push: { transactions: transactionData },
      $set: { perks: perks },
    },
    { new: true }
  );
};

const walletRepository = {
  createWallet,
  getWalletByUserId,
  getWalletByWalletId,
  activateWallet,
  deactivateWallet,
  creditToWallet,
  debitFromWallet,
  getWallets,
  makePaymentToDoctor,
  getTopupPlanDetails,
  takeTopupPlan,
};

module.exports = walletRepository;
