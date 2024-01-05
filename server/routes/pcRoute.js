const express = require("express");
const controller = require("../controllers/pc");

const routerLaptop = express.Router();
routerLaptop.get("/", controller.get);

module.exports = routerLaptop;
