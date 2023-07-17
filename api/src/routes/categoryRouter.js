const { getAllCategory, categoryDelete, categoryUpdate, categoryCreate } = require("../controllers/categoryController");

const getAllCategoryRouter = async (req, res, next) => {
    const { name } = req.query;
    try {
        const allCategory = await getAllCategory()
        if (name) {
            const categoryName = allCategory.filter(category => category.name.toLowerCase().includes(name.toLowerCase()))
            if (categoryName.length > 0) {
                return res.status(201).json(categoryName);
            } else {
                return res.status(404).send({ message: 'La categoria no existe' })
            }
        }
        res.status(201).json(allCategory)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}


const addCategoryRouter = async (req, res, next) => {
    const { name } = req.body;
    try {
        const newCategory = await categoryCreate(name)
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
const updateCategoryRouter = async (req, res, next) => {
    const { id, name } = req.body;
    try {
        const update = await categoryUpdate(id, name)
        res.status(201).send(update);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const categoryDeleteRouter = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteCategory = await categoryDelete(id)
        res.status(201).send({ status: '201', message: `Categoria con el id ${id} eliminado` });

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = { getAllCategoryRouter, addCategoryRouter, updateCategoryRouter, categoryDeleteRouter };