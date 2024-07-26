const NotFoundError = require("../../errors/notfound.error");
const { walletRepository } = require("../../repositories");

const getWalletByUserId = async (userId) => {
  const wallet = await walletRepository.getWalletByUserId(userId);

  if (!wallet)
    throw new NotFoundError("Wallet", userId, {
      msg: "Sorry, Your wallet not found.",
    });

  return wallet;
};

const getWalletByWalletId = async (walletId) => {
  const wallet = await walletRepository.getWalletByWalletId(walletId);

  if (!wallet)
    throw new NotFoundError("Wallet", walletId, {
      msg: "Sorry, Your wallet not found.",
    });

  return wallet;
};

const getWallets = async (role) => {
  const wallets = await walletRepository.getWallets(role);

  if (!wallets.length) {
    throw new NotFoundError("Wallets", role ? role : "", {
      msg: "No wallets found.",
    });
  }

  return wallets;
};

module.exports = {
  getWalletByUserId,
  getWalletByWalletId,
  getWallets,
};
