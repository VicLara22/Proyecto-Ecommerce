const { Category } = require("../db");

const getAllCategory = async () => {
    const allCategory = await Category.findAll()
    return allCategory
}


const categoryCreate = async (name) => {
    const newCategory = await Category.create({ name })
    return newCategory;

}

const categoryUpdate = async (id, name) => {
    const category = await Category.findOne(id);
    const updateCategory = await category.update({
        name: name
    });
    return updateCategory;
}


const categoryDelete = async (id) => {
    const category = await Category.findByPk(id);
    const deleteCategory = await Category.destroy({
        where: { id: id }
    })
    return deleteCategory;
}


module.exports = { getAllCategory, categoryCreate, categoryUpdate, categoryDelete };