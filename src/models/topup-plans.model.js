const mongoose = require("mongoose");
const { Schema } = mongoose;

const topupPlanSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ["Plant", "Tree", "Forest"],
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
  freeChatConsultations: {
    type: Number,
    default: 0,
  },
  freeVideoConsultations: {
    type: Number,
    default: 0,
  },
  coupons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
    },
  ],
  bonus: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
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

topupPlanSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("TopupPlan", topupPlanSchema);
