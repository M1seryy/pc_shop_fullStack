const express = require("express");
const controller = require("../controllers/pc");

const routerLaptop = express.Router();
routerLaptop.get("/", controller.get);
routerLaptop.put("/:id", controller.update);

module.exports = routerLaptop;
