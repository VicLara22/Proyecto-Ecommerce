const getAllPrice = require("../controllers/priceController");

const getAllPriceRouter = async (req, res, next) => {
    try {
        const allPrice = await getAllPrice()
        res.status(201).json(allPrice)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = getAllPriceRouter;
