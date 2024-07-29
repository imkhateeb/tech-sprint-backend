const mongoose = require("mongoose");

const { Schema } = mongoose;

const insurancePolicySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  policyId: {
    type: String,
    required: true,
    unique: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "InsuranceProvider",
    required: true,
  },
  coverageDetails: {
    type: String,
    required: true,
  },
  premiumAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "expired"],
    default: "active",
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
});

insurancePolicySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("InsurancePolicy", insurancePolicySchema);
