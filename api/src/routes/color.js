const { Router } = require("express");
const { getAllColorRouter, addColorRouter, updateColorRouter, colorDeleteRouter } = require("./colorRouter");

const router = Router();


router.get('/', getAllColorRouter)
router.post('/', addColorRouter)
router.put('/:id', updateColorRouter)
router.delete('/:id', colorDeleteRouter)

module.exports = router;