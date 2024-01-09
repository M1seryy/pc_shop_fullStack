const service = require("../services/pc");
// const schema = require("../models/laptop");

const get = async (req, res, next) => {
  try {
    const results = await service.getAll();
    res.json({
      status: "success",
      code: 200,
      data: results,
    
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { productName, image, cpu, ram, storage, screen, price, description } =
    req.body;
  try {
    const result = await service.updateProduct(id, {
      productName,
      image,
      cpu,
      ram,
      storage,
      screen,
      price,
      description,
    });
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { laptop: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await service.deleteProduct(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: result,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  get,
  update,
  deleteItem,
};
