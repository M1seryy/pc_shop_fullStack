const bctypt = require("bcrypt");
const userScheme = require("../models/user");
const service = require("../services/user");

const register = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    if (email) {
      const salt = bctypt.genSaltSync(Number(process.env.SALT));
      const hashPassword = await bctypt.hash(password, salt);
      const emailVerify = await userScheme.findOne({ email });

      if (!emailVerify) {
        const response = await service.createUser({
          name,
          email,
          password: hashPassword,
        });
        res.status(201).json({
          email: response.email,
          password: response.password,
        });
      } else {
        res.status(409).json({
          message: "Email in use",
        });
      }
    } else {
      res.status(400).json({
        message: "No email",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  register,
};
