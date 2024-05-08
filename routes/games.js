// Файл routes/games.js

const gamesRouter = require('express').Router();

const {
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsGameExists,
    checkIsVoteRequest
    } = require('../middlewares/games');
const {
    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendGameUpdated,
    sendGameDeleted
    } = require('../controllers/games');
const {checkAuth} = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, checkAuth,createGame, sendGameCreated, checkEmptyFields, checkIfCategoriesAvaliable, checkIsGameExists);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkAuth, updateGame, sendGameUpdated, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields,);
gamesRouter.delete("/games/:id", deleteGame, checkAuth, sendGameDeleted);

module.exports = gamesRouter;