const { ClickableBanner } = require("../models");

const createClickableBanner = async (data) => {
  return await ClickableBanner.create(data);
};

const getClickableBanners = async (filter) => {
  return await ClickableBanner.find(filter);
};

const getClickableBannerById = async (id) => {
  return await ClickableBanner.findById(id);
};

const activateClickableBanner = async (id) => {
  return await ClickableBanner.findByIdAndUpdate(
    id,
    { isActive: true },
    { new: true }
  );
};

const deactivateClickableBanner = async (id) => {
  return await ClickableBanner.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};

const deleteClickableBanner = async (id) => {
  return await ClickableBanner.findByIdAndDelete(id);
};

const clickableBannerRepository = {
  createClickableBanner,
  getClickableBanners,
  getClickableBannerById,
  activateClickableBanner,
  deactivateClickableBanner,
  deleteClickableBanner,
};

module.exports = clickableBannerRepository;
