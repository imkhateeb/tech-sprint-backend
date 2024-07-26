const express = require("express");

const v1Router = express.Router();

const adminRouter = require("./admin");
const doctorRouter = require("./doctor");
const patientRouter = require("./patient");
const authRouter = require("./auth.route");
const publicRouter = require("./public");

v1Router.use("/auth", authRouter);
v1Router.use("/admin", adminRouter);
v1Router.use("/doctor", doctorRouter);
v1Router.use("/patient", patientRouter);
v1Router.use("/public", publicRouter);

module.exports = v1Router;
