const { getAllColor, colorCreate } = require("../controllers/colorController");

const getAllColorRouter = async (req, res, next) => {
    try {
        const allColor = await getAllColor()
        res.status(201).json(allColor)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}


const addColorRouter = async (req, res, next) => {
    const { name } = req.body;
    try {
        const newColor= await colorCreate(name)
        res.status(201).json(newColor)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
const updateColorRouter = async (req, res, next) => {
    const { id, name } = req.body;
    try {
        const update = await colorUpdate(id, name)
        res.status(201).send(update);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const colorDeleteRouter = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteColor = await colorDelete(id)
        res.status(201).send({ status: '201', message: `Categoria con el id ${id} eliminado` });

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = { getAllColorRouter, addColorRouter, updateColorRouter, colorDeleteRouter };