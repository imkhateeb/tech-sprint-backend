const { ClickableBanner } = require("../models");

const createClickableBanner = async (data) => {
  return await ClickableBanner.create(data);
};

const getClickableBanners = async () => {
  return await ClickableBanner.find();
};

const activateClickableBanner = async (id) => {
  return await ClickableBanner.findByIdAndUpdate(id, { isActive: true });
};

const deactivateClickableBanner = async (id) => {
  return await ClickableBanner.findByIdAndUpdate(id, { isActive: false });
};

const deleteClickableBanner = async (id) => {
  return await ClickableBanner.findByIdAndDelete(id);
};

const clickableBannerRepository = {
  createClickableBanner,
  getClickableBanners,
  activateClickableBanner,
  deactivateClickableBanner,
  deleteClickableBanner,
};

module.exports = clickableBannerRepository;
