const { Router } = require("express");
const { } = require("./categoryRouter");
const {getAllSizeRouter, addSizeRouter, updateSizeRouter, sizeDeleteRouter} = require("./sizeRouter");

const router = Router();

router.get('/', getAllSizeRouter);
router.post('/', addSizeRouter)
router.put('/:id', updateSizeRouter)
router.delete('/:id', sizeDeleteRouter )

module.exports = router;