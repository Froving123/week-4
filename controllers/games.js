// Файл controllers/games.js

const sendAllGames = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // Вернём найденные игры в формате JSON
  res.end(JSON.stringify(req.gamesArray));
  console.log(req.gamesArray);
};

module.exports = sendAllGames;