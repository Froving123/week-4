// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const {
    findAllCategories,
    createCategory,
    findCategoryById,
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName,
    updateCategory
    } = require('../middlewares/categories');
const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted
    } = require('../controllers/categories');
const {checkAuth} = require("../middlewares/auth.js");

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated, checkIsCategoryExists, checkEmptyName, checkAuth);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdated, checkAuth);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted, checkAuth);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;