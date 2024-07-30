const { clickableBannerRepository } = require("../../repositories");

const getClickableBanners = async (user) => {
  /**
   * Logic
   * 1. Get all clickable banners
   * 2. Return the clickable banners
   */

  // Get all clickable banners
  const clickableBanners = await clickableBannerRepository.getClickableBanners(
    {}
  );

  return clickableBanners;
};

module.exports = getClickableBanners;
