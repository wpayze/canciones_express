var express = require('express');
var router = express.Router();

var cancionController = require('../controllers/cancionController');

router.get('/canciones', cancionController.getSongs)
router.post('/add', cancionController.agregarSong);

module.exports = router;
