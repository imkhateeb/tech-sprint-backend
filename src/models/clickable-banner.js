const mongoose = require("mongoose");

const { Schema } = mongoose;

const clickableBannerSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ClickableBanner = mongoose.model(
  "ClickableBanner",
  clickableBannerSchema
);

module.exports = ClickableBanner;
