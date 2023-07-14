const { Router } = require('express');
require('dotenv').config();

const categoryRouter= require("./category.js");
const sizeRouter= require("./size.js");
const priceRouter= require("./price.js");
const productsRouter= require("./product.js");
const colorRouter= require("./color.js");
const filters= require("./filter.js");

const router = Router();

router.use("/products", productsRouter);
router.use("/category", categoryRouter);
router.use("/size", sizeRouter);
router.use("/price", priceRouter);
router.use("/color", colorRouter);
router.use("/filter", filters);


module.exports = router; 