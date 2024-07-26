const NotFoundError = require("../../errors/notfound.error");
const BadRequest = require("../../errors/badrequest.error");
const { walletRepository } = require("../../repositories");

const creditToWallet = async (user, amount, description) => {
  // Logic
  // 1. Check if amount is valid
  // 2. Get wallet by user id
  // 3. Check if wallet exists
  // 4. Check if wallet is activated
  // 5. create transaction data
  // 6. Update
  // 7. Return updated wallet

  // 1.1
  if (amount <= 0)
    throw new BadRequest("Amount", { msg: "Amount should be greater than 0" });

  // 1.2
  if (typeof amount !== "number")
    throw new BadRequest("Amount", { msg: "Amount should be a number" });

  // 2
  const wallet = await walletRepository.getWalletByUserId(user._id);

  // 3
  if (!wallet)
    throw new NotFoundError("Wallet", user._id, {
      msg: "Sorry, Your wallet not found.",
    });

  // 4
  if (!wallet.isActivated)
    throw new BadRequest("Wallet", {
      msg: "Sorry, Your Wallet is not activated.",
    });

  const transactionData = {
    transactionId: `TOPUP-${Date.now()}`,
    isTopup: true,
    amount,
    transactionType: "credit",
    description,
    balanceAfterTransaction: wallet.balance,
    balanceAfterTransaction: wallet.balance + amount,
  };

  const updatedWallet = await walletRepository.creditToWallet(
    wallet._id,
    amount,
    transactionData
  );
  return updatedWallet;
};

module.exports = creditToWallet;
