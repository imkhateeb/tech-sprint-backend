const { User } = require("../models");

const getAllDoctors = async () => {
  const doctors = await User.find({ role: "doctor" });
  return doctors;
};

const publicRepository = { getAllDoctors };

module.exports = publicRepository;
