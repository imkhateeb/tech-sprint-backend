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

const publicController = { getAllDoctors };

module.exports = publicController;
