var express = require('express');
var router = express.Router();

var cancionController = require('../controllers/cancionController');

router.get('/canciones', cancionController.getSongs)
router.get('/add', cancionController.getForm)
router.post('/add', cancionController.agregarSong);
router.post('/mayorque/:year', cancionController.mayorQue);

module.exports = router;
