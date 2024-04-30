// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  console.log("GET /games");
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({
          path: "users",
          select: "-password"
        });
  next();
};
const findGameById = async (req, res, next) => {
  try {
      req.game = await games
      .findById(req.params.id)
      .populate("categories")
      .populate({
          path: "users",
          select: "-password"
        });
  next();
  } catch (error) {
      res.status(404).send({ message: "Game not found" });
  }
};
const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating game");
  }
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames, createGame, findGameById;