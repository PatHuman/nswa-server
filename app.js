var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var db = require("./models");
var app = express();

// db.sequelize.sync();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/dist')));

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname,'/client/dist/index.html'));
    //__dirname : It will resolve to your project folder.
  });
// app.use('/', indexRouter);
// app.use('/api/v1', usersRouter);

module.exports = app;
