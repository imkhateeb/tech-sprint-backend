const { walletService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const createWallet = async (req, res, next) => {
  try {
    const wallet = await walletService.createWallet(req.user);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Wallet created successfully.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getWalletByUserId = async (req, res, next) => {
  try {
    const wallet = await walletService.getWalletByUserId(req.user._id);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Congratulations, Wallet found.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const getWalletByWalletId = async (req, res, next) => {
  try {
    const wallet = await walletService.getWalletByWalletId(req.params.walletId);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Congratulations, Wallet found.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getWallets = async (req, res, next) => {
  try {
    const wallets = await walletService.getWallets(req.query.role);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Congratulations, Wallets found.",
      data: { wallets },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const activateWallet = async (req, res, next) => {
  try {
    const wallet = await walletService.activateWallet(req.user);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Wallet activated successfully.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};
const deactivateWallet = async (req, res, next) => {
  try {
    const wallet = await walletService.deactivateWallet(req.user);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Wallet deactivated successfully.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const creditToWallet = async (req, res, next) => {
  const { amount, description } = req.body;
  try {
    const wallet = await walletService.creditToWallet(
      req.user,
      amount,
      description
    );
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Amount credited to wallet successfully.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const debitFromWallet = async (req, res, next) => {
  const { amount, description } = req.body;
  try {
    const wallet = await walletService.debitFromWallet(
      req.user,
      amount,
      description
    );
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Amount debited from wallet successfully.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const makePaymentToDoctor = async (req, res, next) => {
  const patientId = req.user._id;
  const { doctorId } = req.params;
  const { amount, description } = req.body;
  try {
    const patientWallet = await walletService.makePaymentToDoctor(
      patientId,
      doctorId,
      amount,
      description
    );

    return res.status(StatusCodes.ACCEPTED).json({
      status: "success",
      msg: "Payment made to doctor successfully.",
      data: { patientWallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const takeTopupPlan = async (req, res, next) => {
  const { planId } = req.params;
  const user = req.user;
  try {
    const wallet = await walletService.takeTopupPlan(planId, user);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Topup plan taken successfully.",
      data: { wallet },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const walletController = {
  createWallet,
  getWalletByUserId,
  getWalletByWalletId,
  getWallets,
  activateWallet,
  deactivateWallet,
  creditToWallet,
  debitFromWallet,
  makePaymentToDoctor,
  takeTopupPlan,
};

module.exports = walletController;
