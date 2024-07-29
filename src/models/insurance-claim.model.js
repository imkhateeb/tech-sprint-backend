const mongoose = require("mongoose");
const { Schema } = mongoose;

const insuranceClaimSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  policyId: {
    type: Schema.Types.ObjectId,
    ref: "Policy",
    required: true,
  },
  claimId: {
    type: String,
    required: true,
    unique: true,
  },
  abhaId: {
    type: String,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["submitted", "processing", "approved", "rejected"],
    default: "submitted",
  },
  submissionDate: {
    type: Date,
    default: Date.now,
  },
});

insuranceClaimSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("InsuranceClaim", insuranceClaimSchema);
