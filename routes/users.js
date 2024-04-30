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

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
gamesRouter.get("/users/:id", findUserById, sendUserById);
gamesRouter.put("/users/:id", findUserById, updateUser, sendUserUpdated);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;