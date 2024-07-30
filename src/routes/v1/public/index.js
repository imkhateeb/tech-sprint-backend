const express = require("express");
const { publicController } = require("../../../controllers");
const publicRouter = express.Router();

publicRouter.get("/doctors", publicController.getAllDoctors);
publicRouter.get("/clickable-banners", publicController.getAllActiveBanners);

module.exports = publicRouter;
