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

const getProductById = async (id) => {
    try{
        const product = await Product.findByPk(id,{
            include: [Category, Color, Size]
        });
        if (!product) {
            throw new Error(`No existe producto con el id ${id}`);
          }
        return product;
    } catch(error){
        throw error
    }
}
 
const getProductsByName = async (name) => {
    const productByName = await Product.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            },
        },
        include: [Category, Color, Size],
    })
    return productByName;
}


const productCreate = async (name, price, stock, description, state, image, size, colors) => {
    const newProduct = await Product.create({ name, price, stock, description, state, image, size, colors })
    return newProduct;

}

const productUpdate = async (id, name, price, stock, description, state, image, size, color, category) => {
    const product = await Product.findByPk(id);
    if(!product){
        throw new Error('Porduct not found')
    }
    const updateProduct = await product.update({name, price, stock, description, state, image, size, color, category
    });
    return updateProduct;
}


const productDelete = async (id) => {
    await Product.destroy({
        where: { id: id }
    })
}


module.exports = { getAllProducts, getProductsByName, getProductById, productUpdate, productCreate, productDelete };