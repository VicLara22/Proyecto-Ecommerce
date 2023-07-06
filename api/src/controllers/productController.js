const { Op } = require("sequelize");
const { Product, Category } = require("../db");

const getAllPorducts = async () => {
    const allProduct = await Product.findAll({
        include: [
            {
                model: Category,
                atributes: ["name"],
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
    const product = await Product.findOne(id);
    const updateProduct = await product.update({
        name: name, price: price, stock: stock, description: description, state: state, image, size: size, colors: colors
    });
    return updateProduct;
}


const productDelete = async (id) => {
    const product = await Product.findByPk(id);
    const deleteProduct = await Product.destroy({
        where: { id: id }
    })
    return deleteProduct;
}


module.exports = { getAllPorducts, getProductsByName, getProductById, productUpdate, productCreate, productDelete };