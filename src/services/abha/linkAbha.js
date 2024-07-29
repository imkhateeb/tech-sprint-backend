const ValidationError = require("../../errors/validation.error");
const abhaRepository = require("../../repositories/abha.repository");

const linkAbha = async (abhaId, user) => {
  /**
   * Logic
   * 1. Verify ABHA ID with ABHA API
   * 2. If ABHA ID is valid, link ABHA ID with user
   */

  const isValidAbhaId = true;

  if (!isValidAbhaId) {
    throw new ValidationError({
      msg: "Invalid ABHA ID",
    });
  }
  const updatedUser = await abhaRepository.linkAbha(abhaId, user._id);

  return updatedUser;
};

module.exports = linkAbha;
