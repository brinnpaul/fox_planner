var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');
var fs = require('fs');
var router = require('./routes');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/public/gmaps', express.static(path.join(__dirname, './public')));
app.use('/bootstrap', express.static(path.join(__dirname, './node_modules/bootstrap/dist')))
app.use('/jquery', express.static(path.join(__dirname, './node_modules/jquery/dist')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router)

module.exports = app;
