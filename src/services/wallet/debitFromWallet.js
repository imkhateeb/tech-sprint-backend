const NotFoundError = require("../../errors/notfound.error");
const BadRequest = require("../../errors/badrequest.error");
const { walletRepository } = require("../../repositories");

const debitFromWallet = async (user, amount, description) => {
  /**
   * Logic
   * 1. Check if amount is valid
   * 2. Get wallet by user id
   * 3. Check if wallet exists
   * 4. Check if wallet is activated
   * 5. Check if wallet has sufficient balance
   * 6. create transaction data
   * 7. Update
   * 8. Return updated wallet
   */

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

  // 5
  if (wallet.balance < amount) {
    throw new BadRequest("Wallet Balance", {
      msg: `Insufficient balance: Rs. ${wallet.balance}`,
    });
  }

  // 6
  const transactionData = {
    transactionId: `WITHDRAW-${Date.now()}`,
    isWithdrawal: true,
    amount,
    transactionType: "debit",
    description,
    balanceBeforeTransaction: wallet.balance,
    balanceAfterTransaction: wallet.balance - amount,
  };

  // 7
  const updatedWallet = await walletRepository.debitFromWallet(
    wallet._id,
    amount,
    transactionData
  );

  // 8
  return updatedWallet;
};

module.exports = debitFromWallet;
