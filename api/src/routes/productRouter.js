const { Product, Category } = require('../db');
const { getProductById, productCreate, productDelete, productUpdate, getAllProducts } = require("../controllers/productController");


const getAllProductsRouter = async (req, res, next) => {
    const { name } = req.query;
    try {

        const allProduct = await getAllProducts();

        if (name) {
            const productsName = allProduct.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
            if (productsName.length > 0) {
               return res.status(201).json(productsName);
            } else { 
               return res.status(404).send({ message: 'El producto no existe' });
            }
        }
        res.status(200).json(allProduct)
    } catch (error) { 
        res.status(400).send(error);
        console.log(error);
    }
}


const getProductByIdRouter = async (req, res, next) => {
    const { id } = req.params

    try {
        const product = await getProductById(id);
        if (!product) {
            res.status(404).json({ status: 'error', message: `No existe producto con el id ${id}` });
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving product');
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
        const update =
            await productUpdate(id, name, price, stock, description, state, image);
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

module.exports = { getAllProductsRouter, getProductByIdRouter, addProductRouter, updateProductRouter, productDeleteRouter };