const { Category, Product, Color } = require('../db');

const filterByColorRouter = async (req, res) => {
    const { color } = req.query;
    try {
        const colors = await Color.findOne({
            where: {
                name: color
            }
        });
        if (!colors) {
            res.status(404).json({ message: 'Color no encontrado' });
            return;
        }
        const filterproductsColor = await Product.findAll({
            include: [
                {
                    model: Color,
                    where: {
                        name: color,
                    },
                    attributes: ['name']
                }
            ]
        });
        res.status(200).send(filterproductsColor)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
} 

module.exports =  filterByColorRouter ; 