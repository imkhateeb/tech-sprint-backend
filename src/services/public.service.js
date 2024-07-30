const getAllActiveBanners = require("./public/getAllActiveBanners");
const getAllDoctors = require("./public/getAllDoctors");

const publicService = {
  getAllDoctors,
  getAllActiveBanners,
};

module.exports = publicService;
