const NotFoundError = require("../../errors/notfound.error");
const BadRequest = require("../../errors/badrequest.error");
const ValidationError = require("../../errors/validation.error");

const { walletRepository } = require("../../repositories");

const takeTopupPlan = async (planId, user) => {
  // Logic
  // 1. Find the topup plan by planId
  // 2. check we have the plan in the database
  // 3. check if plan is active
  // 4. Find the user's wallet
  // 5. check if user has wallet
  // 6. check if wallet is active
  // 7. Prepare perks, transactionData
  // 8. Call the repository method to take the topup plan
  // 9. Return the updated wallet

  // 1
  const topupPlan = await walletRepository.getTopupPlanDetails(planId);

  // 2
  if (!topupPlan) {
    throw new NotFoundError("Topup Plan", planId, {
      msg: "No such Top-up plans exist.",
    });
  }

  // 3
  if (!topupPlan.isActive) {
    throw new BadRequest("Topup Plan", {
      msg: "Top-up plan is currently not available.",
    });
  }

  // 4
  const wallet = await walletRepository.getWalletByUserId(user._id);

  // 5
  if (!wallet) {
    throw new NotFoundError("Wallet", user._id, {
      msg: "No wallet found for the user.",
    });
  }

  // 6
  if (!wallet.isActivated) {
    throw new BadRequest("Wallet", {
      msg: "Sorry, Your Wallet is not activated.",
    });
  }

  // 7
  const perks = {
    freeChatConsultations:
      wallet.perks.freeChatConsultations + topupPlan.freeChatConsultations,
    freeVideoConsultations:
      wallet.perks.freeVideoConsultations + topupPlan.freeVideoConsultations,
    coupons: topupPlan.coupons.concat(wallet.perks.coupons),
  };

  const transactionData = {
    transactionId: `TOPUP-PLAN-${Date.now()}`,
    isTopup: true,
    paidTo: user._id,
    paidBy: user._id,
    amount: topupPlan.amount + topupPlan.bonus,
    transactionType: "credit",
    description: `Topup plan: ${topupPlan.name}`,
    balanceBeforeTransaction: wallet.balance,
    balanceAfterTransaction:
      wallet.balance + topupPlan.amount + topupPlan.bonus,
  };

  const amount = topupPlan.amount + topupPlan.bonus;

  // 8
  const updatedWallet = await walletRepository.takeTopupPlan(
    wallet._id,
    amount,
    perks,
    transactionData
  );

  // 9
  return updatedWallet;
};

module.exports = takeTopupPlan;
