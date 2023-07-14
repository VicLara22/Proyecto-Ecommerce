const { Router } = require("express");

const filterByCategory = require("../filters/filterByCategory");
const filterByColor = require("../filters/filterByColor");
const filterByPrice = require("../filters/filterByPrice");
const filterBySize = require("../filters/filterBySize");

const router = Router();


router.get('/categories', filterByCategory);
router.get('/color', filterByColor);
router.get('/price', filterByPrice);
router.get('/sizes', filterBySize);


module.exports = router;