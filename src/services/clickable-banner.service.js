const activateClickableBanner = require("./clickable-banner/activateClickableBanner");
const createClickableBanner = require("./clickable-banner/createClickableBanner");
const deactivateClickableBanner = require("./clickable-banner/deactivateClickableBanner");
const deleteClickableBanner = require("./clickable-banner/deleteClickableBanner");
const getClickableBanners = require("./clickable-banner/getClickableBanners");

const clickableBannerService = {
  activateClickableBanner,
  deactivateClickableBanner,
  createClickableBanner,
  deleteClickableBanner,
  getClickableBanners,
};

module.exports = clickableBannerService;
