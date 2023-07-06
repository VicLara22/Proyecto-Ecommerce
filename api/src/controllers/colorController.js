const { Color } = require("../db");

const getAllColor = async () => {
    const allColor = await Color.findAll()
    return allColor
}


const colorCreate = async (name) => {
    const newColor = await Color.create({ name })
    return newColor;

}

const colorUpdate = async (id, name) => {
    const color = await Color.findOne(id);
    const updateColor = await Color.update({
        name: name
    });
    return updateColor;
}


const colorDelete = async (id) => {
    const color = await Color.findByPk(id);
    const deleteColor = await Color.destroy({
        where: { id: id }
    })
    return deleteColor;
}


module.exports = { getAllColor, colorCreate, colorUpdate, colorDelete };