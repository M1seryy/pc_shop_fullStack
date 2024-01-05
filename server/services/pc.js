const laptop = require("../models/laptop");
const getAll = async () => {
  const findAll = await laptop.find({});
  console.log(findAll);
  return findAll;
};
module.exports = {
  getAll,
};
