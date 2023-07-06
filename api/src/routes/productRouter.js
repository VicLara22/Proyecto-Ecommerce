const { Product, Category } = require('../db');
const { getProductById, getProductsByName, productCreate, productDelete, productUpdate, getAllPorducts } = require("../controllers/productController");


const getAllPorductsRouter = async (req, res, next) => {
    const { name } = req.query;

    try {
        const allProduct = await getAllPorducts()
        const nameProduct = await getProductsByName(name)
        if (!name) {
            res.status(404).json(allProduct)
        } else if (nameProduct.length > 0) {
            res.status(201).json(nameProduct)
      
        } else {
            res.status(404).send({ message: 'El Nombre no existe' })
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}


const getProductByIdRouter = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await getProductById(id)
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const addProductRouter = async (req, res, next) => {
    const { name, price, stock, description, state, image, size, category, color } = req.body;
    try {
        const newProduct = await productCreate(name, price, stock, description, state, image, size)
        newProduct.addCategory(category);
        newProduct.addColor(color);
        res.status(201).send('Creado con exito')
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
const updateProductRouter = async (req, res, next) => {
    const { id, name, price, stock, description, state, image, size, category, color } = req.body;
    try {
        const update = await productUpdate(id, name, price, stock, description, state, image, size)
        update.addCategory(category);
        update.addColor(color);
        res.status(201).json(update);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const productDeleteRouter = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteProduct = await productDelete(id)
        res.status(201).send({ status: '201', message: `Poducto con el id ${id} eliminado` });

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = { getAllPorductsRouter, getProductByIdRouter, addProductRouter, updateProductRouter, productDeleteRouter };