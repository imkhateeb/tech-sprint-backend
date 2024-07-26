const adminValidator = require("./admin.validator");
const doctorValidator = require("./doctor.validator");
const patientValidator = require("./patient.validator");

const validator = {
  doctorValidator,
  patientValidator,
  adminValidator,
};

module.exports = validator;
