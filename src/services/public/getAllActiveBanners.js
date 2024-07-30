const { clickableBannerRepository } = require("../../repositories");

const getAllActiveBanners = async () => {
  const activeBanners = await clickableBannerRepository.getClickableBanners({
    isActive: true,
  });

  return activeBanners;
};

module.exports = getAllActiveBanners;
