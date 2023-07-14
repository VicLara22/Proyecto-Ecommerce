const { Size } = require('../db');

const getAllSize = async () => {
    const allSize = await Size.findAll()
    return allSize;
}

const sizeCreate = async (name) => {
    const newSize = await Size.create({ name })
    return newSize;
}

const sizeUpdate = async (id, name) => {
    const size = await Size.findOne(id); 
    const updateSize = await size.update({
        name: name
    });
    return updateSize;
}

const sizeDelete = async (id) => {
    const size = await Size.findByPk(id);
    const deleteSize = await Size.destroy({
        where: { id: id }
    })
    return deleteSize;
}


module.exports = {getAllSize, sizeCreate, sizeUpdate, sizeDelete }