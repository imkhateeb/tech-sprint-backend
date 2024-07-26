const express = require("express");

const authRouter = express.Router();

const { authController } = require("../../controllers");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = authRouter;
