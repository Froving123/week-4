const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    
  req.categoriesArray = await categories.find({});
  next();
}
const createCategories = async (req, res, next) => {
  console.log("POST /categories");
  try {
    console.log(req.body);
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating category");
  }
};



module.exports = findAllCategories, createCategories;