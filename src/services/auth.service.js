const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/server.config");
const { authRepository } = require("../repositories");

const NotFoundError = require("../errors/notfound.error");
const BadRequest = require("../errors/badrequest.error");
const ConflictError = require("../errors/conflict.error");
const ValidationError = require("../errors/validation.error");

const register = async (name, email, password, role) => {
  const user = await authRepository.findUserByEmail(email);
  if (user) {
    throw new ConflictError("Email", {
      msg: `User with ${email} already exists.`,
    });
  }
  if (role !== "admin" && role !== "patient" && role !== "doctor") {
    throw new ValidationError({
      msg: "Role must be either 'admin', 'patient' or 'doctor'.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = { name, email, password: hashedPassword, role };
  const newUser = await authRepository.createUser(userData);
  return newUser;
};

const login = async (email, password) => {
  const user = await authRepository.findUserByEmail(email);
  if (!user) {
    throw new NotFoundError("User", email, {
      msg: "User with this email does not exist.",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new BadRequest("Password", { msg: "Invalid Password is entered." });
  }
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET_KEY);
  return { user, token };
};

const authService = {
  register,
  login,
};

module.exports = authService;
