const NotFoundError = require("../../errors/notfound.error");
const BadRequest = require("../../errors/badrequest.error");
const ValidationError = require("../../errors/validation.error");
const { walletRepository } = require("../../repositories");

const makePaymentToDoctor = async (
  patientId,
  doctorId,
  amount,
  description
) => {
  // Logic to make payment to doctor
  // 1. Check if amount and description are provided and it is valid
  // 2. Get patient wallet
  // 3. Check if wallet is activated or not
  // 4. Check sufficient balance in patient wallet
  // 5. Get doctor wallet
  // 6. Check if doctor wallet is activated or not
  // 7. Get a transactionId
  // 8. Make transactionData object for patient
  // 9. Make transactionData object for doctor
  // 10. Call the repository
  // 11. Return the updated patient wallet

  // 1.1
  if (!amount || !description) {
    throw new ValidationError({ msg: "Amount and description are required" });
  }

  // 1.2
  if (amount <= 0)
    throw new BadRequest("Amount", { msg: "Amount should be greater than 0" });

  // 1.3
  if (typeof amount !== "number")
    throw new BadRequest("Amount", { msg: "Amount should be a number" });

  // 2
  const patientWallet = await walletRepository.getWalletByUserId(patientId);
  if (!patientWallet) {
    throw new NotFoundError("Wallet", patientId, {
      msg: "Sorry, Your wallet not found.",
    });
  }

  // 3
  if (!patientWallet.isActivated) {
    throw new BadRequest("Wallet", {
      msg: "Sorry, Your Wallet is not activated.",
    });
  }

  // 4
  if (patientWallet.balance < amount) {
    throw new BadRequest("Wallet", {
      msg: "Insufficient balance in your wallet.",
    });
  }

  // 5
  const doctorWallet = await walletRepository.getWalletByUserId(doctorId);
  if (!doctorWallet) {
    throw new NotFoundError("Wallet", doctorId, {
      msg: "Doctor's wallet is not found.",
    });
  }

  // 6
  if (!doctorWallet.isActivated) {
    throw new BadRequest("Wallet", {
      msg: "Doctor's wallet is not activated.",
    });
  }

  // 7
  const transactionId = `PAYMENT-${Date.now()}`;

  // 8
  const patientTransactionData = {
    transactionId,
    amount,
    paidTo: doctorId,
    transactionType: "debit",
    description,
    balanceBeforeTransaction: patientWallet.balance,
    balanceAfterTransaction: patientWallet.balance - amount,
  };

  // 9
  const doctorTransactionData = {
    transactionId,
    amount,
    paidBy: patientId,
    transactionType: "credit",
    description,
    balanceBeforeTransaction: doctorWallet.balance,
    balanceAfterTransaction: doctorWallet.balance + amount,
  };

  // 10
  const patientWalletId = patientWallet._id;
  const doctorWalletId = doctorWallet._id;
  const updatedPatientWallet = await walletRepository.makePaymentToDoctor(
    patientWalletId,
    doctorWalletId,
    patientTransactionData,
    doctorTransactionData,
    amount
  );

  // 11
  return updatedPatientWallet;
};

module.exports = makePaymentToDoctor;
