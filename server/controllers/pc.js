const service = require("../services/pc");
// const schema = require("../models/laptop");

const get = async (req, res, next) => {
  try {
    const results = await service.getAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        laptops: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
  get,
};
