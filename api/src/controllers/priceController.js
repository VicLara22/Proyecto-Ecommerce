const {Product, Category, Color, Size} = require('../db');

const getAllPrice = async () => {
    const allPrice = await Product.findAll(
        {
            include: [
                {
                    model: Category,
                    attributes: ["name"],
                },
                {
                    model: Color,
                    attributes: ["name"]
                },
                {
                    model: Size,
                    attributes: ["name"]
                }
            ]
        })
        

    return allPrice;
}

module.exports = getAllPrice;