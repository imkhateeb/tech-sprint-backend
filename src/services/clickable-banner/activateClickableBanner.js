const NotFoundError = require("../../errors/notfound.error");
const ValidationError = require("../../errors/validation.error");
const { clickableBannerRepository } = require("../../repositories");

const activateClickableBanner = async (bannerId, user) => {
  /**
   * Logic
   * 1. Input validation
   * 2. Check if the clickable banner exists
   * 3. Activate the clickable banner
   * 2. Return the activated clickable banner
   */

  // 1
  if (!bannerId) {
    throw new ValidationError({
      msg: "Banner ID is required",
    });
  }

  // 2
  const banner = await clickableBannerRepository.getClickableBannerById(
    bannerId
  );
  if (!banner) {
    throw new NotFoundError({
      msg: "Banner not found",
    });
  }

  // Activate the clickable banner
  const activatedBanner =
    await clickableBannerRepository.activateClickableBanner(bannerId);

  return activatedBanner;
};

module.exports = activateClickableBanner;
