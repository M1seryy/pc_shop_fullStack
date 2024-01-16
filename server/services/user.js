const userScheme = require("../models/user");

const createUser = async ({ name, email, password }) => {
  console.log(name, email, password);
  return userScheme.create({name, email, password});
};

    

module.exports = {
  createUser,
};
