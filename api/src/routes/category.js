const { Router } = require("express");
const { getAllCategoryRouter, addCategoryRouter, updateCategoryRouter, categoryDeleteRouter } = require("./categoryRouter");

const router = Router();


router.get('/', getAllCategoryRouter)
router.post('/', addCategoryRouter)
router.put('/:id', updateCategoryRouter)
router.delete('/:id', categoryDeleteRouter)

module.exports = router;