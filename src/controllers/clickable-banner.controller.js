const { StatusCodes } = require("http-status-codes");
const { clickableBannerService } = require("../services");

const createClickableBanner = async (req, res, next) => {
  try {
    // Create a new clickable banner
    const newClickableBanner =
      await clickableBannerService.createClickableBanner(req.body);

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

const clickableBannerController = {};

module.exports = clickableBannerController;
