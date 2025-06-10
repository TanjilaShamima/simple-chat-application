const { getLoginPage } = require('../controller/loginController');

const loginRouter = require('express').Router();

// login page
loginRouter.get('/', getLoginPage)




module.exports = loginRouter;