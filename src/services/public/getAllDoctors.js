const { publicRepository } = require("../../repositories");

const getAllDoctors = async () => {
  const doctors = await publicRepository.getAllDoctors();
  return doctors;
};

module.exports = getAllDoctors;
