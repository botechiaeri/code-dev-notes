/***********settings****** */
// require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
/***********static  files***************************/
app.use(express.static(path.join(__dirname, './../public')));
//app.use(express.static(path.join(__dirname, './../views')));

const methodOverride = require('method-override');
/***********middlewares expreess*******/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method?'));

/**************require routes***************/
const mainRouters = require('./routes/main.js');

app.use('/', mainRouters);

app.listen(process.env.PORT || 3090, () => {
    console.log('WS LEVANTADO Y CORRIENDO EN 3090');
});

module.exports = app;