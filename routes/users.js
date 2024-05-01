// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users');
const updateUser = require('../middlewares/users');
const sendUserUpdated = require('../controllers/users');
const deleteUser = require('../middlewares/users');
const sendUserDeleted = require('../controllers/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users');
const checkEmptyNameAndEmail = require('../middlewares/users');
const checkIsUserExists = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated, checkEmptyNameAndEmailAndPassword, checkIsUserExists);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated, checkEmptyNameAndEmail);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;