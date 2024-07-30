const NotFoundError = require("../../errors/notfound.error");
const ValidationError = require("../../errors/validation.error");
const { clickableBannerRepository } = require("../../repositories");

const deactivateClickableBanner = async (bannerId, user) => {
  // Logic
  // 1. Input validation
  // 2. Check if the clickable banner exists
  // 3. Deactivate the clickable banner
  // 4. Return the deactivated clickable banner

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

  // 3
  const deactivatedBanner =
    await clickableBannerRepository.deactivateClickableBanner(bannerId);

  // 4
  return deactivatedBanner;
};

module.exports = deactivateClickableBanner;
