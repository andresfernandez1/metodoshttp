var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const userController = require('../controllers/userController');

/* mostrar formulario REGISTER */
router.get('/register', userController.register);

/* mostrar formulario LOGIN */
router.get('/login', userController.login);

module.exports = router;
