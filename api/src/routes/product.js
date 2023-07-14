const { Router } = require("express");
const { getAllProductsRouter,getAllProductsNameRouter,  getProductByIdRouter, addProductRouter, updateProductRouter, productDeleteRouter } = require("./productRouter");

const router = Router();

router.get('/', getAllProductsRouter);
router.get('/:name', getAllProductsNameRouter);
router.get('/:id', getProductByIdRouter);
router.post('/', addProductRouter);
router.put('/:id', updateProductRouter);
router.delete('/:id', productDeleteRouter);

module.exports = router;