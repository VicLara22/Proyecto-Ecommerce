const { Router } = require('express');
require('dotenv').config();

// Importar todos los routers;
const categoryRouter= require("./category.js");
const productsRouter= require("./product.js");
const colorRouter= require("./color.js");
const filtersCategory= require("../filters/filterByCategory.js");
const filtersColor= require("../filters/filterByColor.js");
const filtersPrice= require("../filters/filterByPrice.js");
const filtersSize= require("../filters/filterBySize.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRouter);
router.use("/category", categoryRouter);
router.use("/color", colorRouter);
router.use("/filter/categories", filtersCategory);
router.use("/filter/color", filtersColor);
router.use("/filter/price", filtersPrice);
router.use("/filter/size", filtersSize);

module.exports = router;