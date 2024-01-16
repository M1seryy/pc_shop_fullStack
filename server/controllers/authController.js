const bctypt = require("bcrypt");
const userScheme = require("../models/user");
const service = require("../services/user");
const jwt = require("jsonwebtoken");

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

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await userScheme.findOne({ email });

      if (user === null) {
        return res.status(401).send({ message: "Email or password is wrong" });
      }
      const validPass = await bctypt.compare(password, user.password);
      console.log("validPass: ", validPass);
      if (!validPass) {
        return res.json({
          status: 401,
          message: "Email or password is wrong",
        });
      }
      const token = jwt.sign(
        { email: user.email, password: user.password },
        process.env.SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.send({ user, token });
    } else {
      return res.json({
        status: 401,
        message: "Email or password is wrong",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  register,
  login,
};
