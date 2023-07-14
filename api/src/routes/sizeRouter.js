const { getAllSize, sizeDelete, sizeUpdate, sizeCreate } = require("../controllers/sizeContoller");

const getAllSizeRouter = async (req, res, next) => {
    try {
        const allSize = await getAllSize()
        res.status(201).json(allSize)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}


const addSizeRouter = async (req, res, next) => {
    const { name } = req.body;
    try {
        const newSize = await sizeCreate(name)
        res.status(201).json(newSize)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
const updateSizeRouter = async (req, res, next) => {
    const { id, name } = req.body;
    try {
        const update = await sizeUpdate(id, name)
        res.status(201).send(update);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
 
const sizeDeleteRouter = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteSize = await sizeDelete(id)
        res.status(201).send({ status: '201', message: `Size con el id ${id} eliminado` });

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = {getAllSizeRouter, addSizeRouter, updateSizeRouter, sizeDeleteRouter }
