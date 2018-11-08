const Cancion = require('../models/Cancion');

exports.getSongs = function (req,res,next){
    Cancion.find(function(err, canciones){
      if (err) return next(err);
      res.render('canciones', { canciones: canciones });
    });
}

exports.agregarSong = function (req, res, next) {
    let newSong = new Cancion({
      name: req.body.name,
      artist: req.body.artist,
      album: req.body.album,
      year: req.body.year,
      country: req.body.country
    });
  
    newSong.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Cancion creada.');
    });
  }