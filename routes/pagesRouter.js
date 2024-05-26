const pagesRouter = require("express").Router();
const { sendIndex, sendDashboard } = require("../controllers/auth.js");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth.js");

pagesRouter.get("/", checkCookiesJWT, checkAuth, sendIndex); 
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 

module.exports = pagesRouter;