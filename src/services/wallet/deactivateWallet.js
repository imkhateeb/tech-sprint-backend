const NotFoundError = require("../../errors/notfound.error");
const { walletRepository } = require("../../repositories");

const deactivateWallet = async (user) => {
  const wallet = await walletRepository.getWalletByUserId(user._id);
  if (!wallet)
    throw new NotFoundError("Wallet", user._id, {
      msg: "Wallet not found for this user.",
    });
  return await walletRepository.deactivateWallet(wallet._id);
};

module.exports = deactivateWallet;
