const { Router } = require("express");

const filterByCategoryRouter = require("../filters/filterByCategory");
const filterByColorRouter = require("../filters/filterByColor");
const filterByPriceRouter = require("../filters/filterByPrice");
const filterBySizeRouter = require("../filters/filterBySize");
const router = Router();


router.get('/', filterByCategoryRouter);
router.get('/', filterByColorRouter);
router.get('/', filterByPriceRouter);
router.get('/', filterBySizeRouter);


module.exports = router;