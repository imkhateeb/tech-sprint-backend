const { StatusCodes } = require("http-status-codes");
const { clickableBannerService } = require("../services");

const createClickableBanner = async (req, res, next) => {
  try {
    // Create a new clickable banner
    const newClickableBanner =
      await clickableBannerService.createClickableBanner(req.body, req.user);

    // Send the new clickable banner as a JSON response
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Clickable banner created",
      data: { newClickableBanner },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getClickableBanners = async (req, res, next) => {
  try {
    // Get all clickable banners
    const clickableBanners = await clickableBannerService.getClickableBanners(
      req.user
    );

    // Send the clickable banners as a JSON response
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Clickable banners found",
      data: { clickableBanners },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const activateClicableBanner = async (req, res, next) => {
  try {
    // Activate a clickable banner
    const activatedClickableBanner =
      await clickableBannerService.activateClickableBanner(
        req.params?.bannerId,
        req.user
      );

    // Send the activated clickable banner as a JSON response
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Clickable banner activated",
      data: { activatedClickableBanner },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const deactivateClickableBanner = async (req, res, next) => {
  try {
    // Deactivate a clickable banner
    const deactivatedClickableBanner =
      await clickableBannerService.deactivateClickableBanner(
        req.params?.bannerId,
        req.user
      );

    // Send the deactivated clickable banner as a JSON response
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Clickable banner deactivated",
      data: { deactivatedClickableBanner },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const deleteClickableBanner = async (req, res, next) => {
  try {
    // Delete a clickable banner
    const deletedClickableBanner =
      await clickableBannerService.deleteClickableBanner(
        req.params?.bannerId,
        req.user
      );

    // Send the deleted clickable banner as a JSON response
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Clickable banner deleted",
      data: { deletedClickableBanner },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const clickableBannerController = {
  createClickableBanner,
  getClickableBanners,
  activateClicableBanner,
  deactivateClickableBanner,
  deleteClickableBanner,
};

module.exports = clickableBannerController;
