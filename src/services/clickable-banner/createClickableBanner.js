const ValidationError = require("../../errors/validation.error");
const { clickableBannerRepository } = require("../../repositories");

const createClickableBanner = async (bannerData, user) => {
  /**
   * Logic
   * 1. Input Validation
   * 2. check if 5 active banners already exist
   * 3. Create a clickable banner
   * 4. Return the created clickable banner
   */

  // 1
  if (!bannerData?.imageUrl) {
    throw new ValidationError({
      msg: "Banner image is required",
    });
  }

  if (!bannerData?.redirectLink) {
    throw new ValidationError({
      msg: "Redirect link is required",
    });
  }

  // 2
  const activeBanners = await clickableBannerRepository.getClickableBanners({
    isActive: true,
  });
  if (activeBanners.length === 5) {
    throw new ValidationError({
      msg: "Maximum 5 active banners are allowed",
    });
  }

  // 3
  const createdBanner = await clickableBannerRepository.createClickableBanner({
    imageUrl: bannerData.imageUrl,
    redirectLink: bannerData.redirectLink,
    createdBy: user._id,
  });

  // 4
  return createdBanner;
};

module.exports = createClickableBanner;
