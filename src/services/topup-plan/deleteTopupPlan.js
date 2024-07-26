const NotImplemented = require("../../errors/notimplemented.error");

const deleteTopupPlan = async (id) => {
  throw new NotImplemented("deleteTopupPlan", {
    msg: "deleteTopupPlan service is not implemented",
  });
};

module.exports = deleteTopupPlan;
