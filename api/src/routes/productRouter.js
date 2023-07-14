const { Product, Category } = require('../db');
const { getProductById, getProductsByName, productCreate, productDelete, productUpdate, getAllProducts } = require("../controllers/productController");


const getAllProductsRouter = async (req, res, next) => {
    try {
        const allProduct = await getAllProducts();
        if (allProduct.length > 0) {
            res.status(201).json(allProduct);
        } else {
            res.status(404).send({ message: 'Los productos no existe' });
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
const getAllProductsNameRouter = async (req, res, next) => {
    const { name } = req.query;

    try {
        const allProduct = await getAllProducts();
        const nameProduct = await getProductsByName(name);

        if (!name) {
            res.status(404).json(allProduct);
        } else if (nameProduct.length > 0) {
            res.status(201).json(nameProduct);
        } else {
            res.status(404).send({ message: 'El Nombre no existe' });
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}



const getProductByIdRouter = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await getProductById(id);
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const addProductRouter = async (req, res, next) => {
    const { name, price, stock, description, state, image, size, category, color } = req.body;
    try {
        const newProduct = await productCreate(name, price, stock, description, state, image);
       await newProduct.addCategory(category);
       await newProduct.addColor(color);
       await newProduct.addSize(size);
        res.status(201).send('Creado con exito')
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
const updateProductRouter = async (req, res, next) => {
    const { id, name, price, stock, description, state, image, size, category, color } = req.body;
    try {
        const update = await productUpdate(id, name, price, stock, description, state, image);
        await update.addCategories(category);
        await update.addColors(color);
        await update.addSize(size);
        res.status(201).json(update);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const productDeleteRouter = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteProduct = await productDelete(id);
        res.status(201).send({ status: '201', message: `Poducto con el id ${id} eliminado` });

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = { getAllProductsRouter, getAllProductsNameRouter,  getProductByIdRouter, addProductRouter, updateProductRouter, productDeleteRouter };