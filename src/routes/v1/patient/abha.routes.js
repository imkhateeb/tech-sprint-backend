const express = require("express");
const { abhaController } = require("../../../controllers");
const patientValidator = require("../../../validators/patient.validator");

const patientAbhaRouter = express.Router();

patientAbhaRouter.post("/link", patientValidator, abhaController.linkAbha);

module.exports = patientAbhaRouter;
