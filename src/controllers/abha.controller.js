const { StatusCodes } = require("http-status-codes");
const { abhaService } = require("../services");

const linkAbha = async (req, res, next) => {
  try {
    const updatedUser = await abhaService.linkAbha(req.body.abhaId, req.user);
    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "ABHA ID linked successfully",
      data: { user: updatedUser },
      error: {},
    });
  } catch (error) {}
};

const abhaController = { linkAbha };

module.exports = abhaController;
