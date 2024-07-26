const BadRequest = require("../../errors/badrequest.error");
const { walletRepository } = require("../../repositories");

const createWallet = async (user) => {
  const existingWallet = await walletRepository.getWalletByUserId(user._id);
  if (existingWallet)
    throw new BadRequest("Wallet", {
      msg: "Wallet already exists for this user",
    });

  const wallet = await walletRepository.createWallet({
    userId: user._id,
    user: user.role,
    isActivated: false,
    balance: 0,
    transactions: [],
  });

  return wallet;
};

module.exports = createWallet;
