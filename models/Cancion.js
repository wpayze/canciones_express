const mongoose = require('mongoose');

// Esquema de Cancion
const cancionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cancion', cancionSchema);
