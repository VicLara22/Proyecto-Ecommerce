const { Router } = require("express");
const { getAllPorductsRouter, getProductByIdRouter, addProductRouter, updateProductRouter, productDeleteRouter } = require("./productRouter");

const router = Router();

router.get('/', getAllPorductsRouter);
router.get('/:id', getProductByIdRouter);
router.post('/', addProductRouter);
router.put('/:id', updateProductRouter);
router.delete('/:id', productDeleteRouter);
module.exports = router;