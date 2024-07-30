const { publicService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await publicService.getAllDoctors();
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Doctors fetched successfully",
      data: { doctors },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getAllActiveBanners = async (req, res, next) => {
  try {
    const activeBanners = await publicService.getAllActiveBanners();

    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Active banners fetched successfully",
      data: { activeBanners },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const publicController = { getAllDoctors, getAllActiveBanners };

module.exports = publicController;
