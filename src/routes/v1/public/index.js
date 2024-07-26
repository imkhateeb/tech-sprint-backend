const express = require("express");
const { publicController } = require("../../../controllers");
const publicRouter = express.Router();

publicRouter.get("/doctors", publicController.getAllDoctors);

module.exports = publicRouter;
