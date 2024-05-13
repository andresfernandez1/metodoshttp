var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

/* GET details movie page. */
router.get('/id/:idPelicula', movieController.detalle);

router.get("/register",movieController.mostrarForm)
router.post("/register",movieController.store)
router.get("/editMovie/:id",movieController.edit)
router.post("/update",movieController.update)
router.post("/deleteMovie",movieController.del)





module.exports = router;