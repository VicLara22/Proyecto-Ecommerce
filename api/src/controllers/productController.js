const { Op } = require("sequelize");
const { Product, Category, Color, Size } = require("../db");

const getAllProducts = async () => {
    const allProduct = await Product.findAll({
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
    return allProduct;
}
const getProductsByName = async (name) => {
    const productByName = await Product.findAll({
        where: {
            name: {
                [Op.like]: name
            },
        }
    })
    return productByName;
}
const getProductById = async (id) => {
    const product = await Product.findOne({
        where: { id: id },
        include: [
            {
                model: Category,
                atributes: ["name"],
            }
        ]
    })
    return product;
}

const productCreate = async (name, price, stock, description, state, image, size, colors) => {
    const newProduct = await Product.create({ name, price, stock, description, state, image, size, colors })
    return newProduct;

}

const productUpdate = async (id, name, price, stock, description, state, image, size, colors) => {
    const product = await Product.findByPk(id);
    const updateProduct = await product.update({
        name, price, stock, description, state, image, size, colors
    });
    return updateProduct;
}


const productDelete = async (id) => {
    await Product.destroy({
        where: { id: id }
    })
}


module.exports = { getAllProducts, getProductsByName, getProductById, productUpdate, productCreate, productDelete };