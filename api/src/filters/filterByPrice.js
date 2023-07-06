const { Op } = require('sequelize');
const { Product } = require('../db');

const filterByPriceRouter = async (req, res) => {
    const { price, state } = req.query;
    console.log(price, state)
    try {
        const lowPrice = await Product.findAll({
            where: {
                state: true,
                price: {
                    [Op.lte]: 1000,
                },

            }
        });
        const mediumPrice = await Product.findAll({
            where: {
                 state: true,
                price: {
                    [Op.and]: {
                        [Op.gt]: 1000,
                        [Op.lte]: 9998,
                    }
            }
        }});
        const highPrice = await Product.findAll({
            where: {
                state: true,
                price: {
                    [Op.gt]: 9999,
                }
    
            }
        });
        const priceResponse = {
            low: lowPrice,
            medium: mediumPrice,
            high: highPrice,
        }
     

        if (!price && !state) {
            res.status(404).json({ message: 'Precio o Estado no encontrado' })
        } else if (price in priceResponse) {
            res.status(201).send(priceResponse[price])
        } else {
            res.status(404).json({ message: 'precio  o estadoinvalido' })
        }


    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}




module.exports = filterByPriceRouter; 