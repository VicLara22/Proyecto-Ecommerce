const { Router } = require("express");
const { } = require("./categoryRouter");
const getAllPriceRouter = require("./priceRouter");

const router = Router();

router.get('/', getAllPriceRouter);


module.exports = router;