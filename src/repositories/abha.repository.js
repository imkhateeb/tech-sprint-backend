const { User } = require("../models");

const linkAbha = async (abhaId, userId) => {
  const user = await User.findByIdAndUpdate(userId, { abhaId }, { new: true });
  return user;
};

const abhaRepository = { linkAbha };

module.exports = abhaRepository;
