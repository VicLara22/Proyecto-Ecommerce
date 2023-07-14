const { Category, Product, Size, Color } = require('../db');

const filterByCategoryRouter = async (req, res) => {
    const { categories } = req.query;
  
    try {
        const category = await Category.findOne({
            where: {
                name: categories
            }
        });
        if (!category) {
            res.status(404).json({ message: 'Categoria no encontrada' });
            return;
        }
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    where: {
                        name: categories,
                    },
                    attributes: ['name']
                },
                {
                    model: Size,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
            ]
        });
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports =  filterByCategoryRouter ; 