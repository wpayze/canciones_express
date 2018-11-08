var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const mongoconfig = require('./config/database');

var indexRouter = require('./routes/index');
var cancionesRouter = require('./routes/canciones');

// Conexion a MongoDB
mongoose.connect(mongoconfig.database, {useNewUrlParser: true});

// Mensaje de Conexion Exitosa
mongoose.connection.on('connected', () => {
    console.log ('Conexion exitosa a ' + mongoconfig.database);
});

// Mensaje de Conexion Fallida
mongoose.connection.on('error', (err) => {
    console.log ('Error de Conexion! El error es el siguiente: ' + err);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', cancionesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
