const { Op } = require('sequelize');
const { Product, Category, Color, Size } = require('../db');

const filterByPriceRouter = async (req, res) => {
    const { price } = req.query;

    try {
        const lowPrice = await Product.findAll({
            where: {
                price: {
                    [Op.lte]: 1000,
                },

            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },

            ]
        });
        const mediumPrice = await Product.findAll({
            where: {
                price: {
                    [Op.and]: {
                        [Op.gt]: 1001,
                        [Op.lte]: 9998,
                    }
                }
            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },

            ]
        });
        const highPrice = await Product.findAll({
            where: {
                price: {
                    [Op.gt]: 9999,
                }

            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },

            ]
        });

        const priceResponse = {
            low: lowPrice,
            medium: mediumPrice,
            high: highPrice,
        }


        if (!price) {
            res.status(404).json({ message: 'Precio no encontrado' })
        } else if (price in priceResponse) {
            res.status(201).send(priceResponse[price])
        } else {
            res.status(404).json({ message: 'precio invalido' })
        }


    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

/* const { Op } = require('sequelize');
const { Product } = require('../db');

const filterByPriceRouter = async (req, res) => {
    const { price } = req.query;

    try {
        const lowPrice = await Product.findOne({
            where: {
                price: {
                    [Op.lte]: 1000,
                }
            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },

            ]
        });
        const mediumPrice = await Product.findOne({
            where: {
                price: {
                    [Op.and]: {
                        [Op.gt]: 1001,
                        [Op.lte]: 9998,
                    }
                }
            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },

            ]
        });
        const highPrice = await Product.findOne({
            where: {
                price: {
                    [Op.gt]: 9999,
                }

            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },

            ]
        });

        const priceResponse = {
            low: lowPrice,
            medium: mediumPrice,
            high: highPrice,
        }


        if (!price) {
            res.status(404).json({ message: 'Precio no encontrado' })
        } else if (price in priceResponse) {
            res.status(201).send(priceResponse[price])
        } else {
            res.status(404).json({ message: 'precio invalido' })
        }

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}




module.exports = filterByPriceRouter; */



module.exports = filterByPriceRouter;



