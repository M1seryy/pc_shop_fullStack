const laptop = require("../models/laptop");

const getAll = async () => {
  const findAll = await laptop.find({});
  return findAll;
};

const updateProduct = (id, fields) => {
  return laptop.findByIdAndUpdate({ _id: id }, fields);
};
module.exports = {
  getAll,
  updateProduct,
};
