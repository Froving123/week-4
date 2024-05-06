const gamesRouter = require("./games");
const usersRouter = require("./users")
const categoriesRouter = require("./categories")
const mainRouter = require("./main")

const apiRouter = require("express").Router();
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", mainRouter);

// Код роута
module.exports = apiRouter;