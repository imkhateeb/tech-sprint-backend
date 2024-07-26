const mongoose = require("mongoose");
const { Schema } = mongoose;

// Transaction Schema
const transactionSchema = new Schema(
  {
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    isTopup: {
      type: Boolean,
      default: false,
    },
    isWithdrawal: {
      type: Boolean,
      default: false,
    },
    paidTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    paidBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["success", "pending", "failed"],
      default: "success",
    },
    balanceBeforeTransaction: {
      type: Number,
      required: true,
    },
    balanceAfterTransaction: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Wallet Schema
const walletSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  user: {
    type: String,
    enum: ["doctor", "patient", "admin"],
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  balance: {
    type: Number,
    default: 0,
    min: 0,
  },
  transactions: [transactionSchema],
  perks: {
    type: Object,
    default: {
      freeChatConsultations: 0,
      freeVideoConsultations: 0,
      coupons: [],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update 'updatedAt' field
walletSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Wallet", walletSchema);
