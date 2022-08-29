/***********settings****** */

const express = require('express');
const path = require('path');
const expressLayout = require('express-layouts')
const app = express();
require('dotenv').config({ path: "./../variables.env" });

app.use(express.static(path.join(__dirname, './../public')));

app.set('views', path.join(__dirname, '/views'));
app.use(expressLayout)
app.set('view engine', 'ejs');
/***********static  files***************************/

//app.use(express.static(path.join(__dirname, './../views')));

const methodOverride = require('method-override');
/***********middlewares expreess*******/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method?'));

/**************require routes***************/
const mainRouters = require('./routes/main.js');
const usersRouters = require('./routes/users.js')
app.use('/', mainRouters);
app.use('/users', usersRouters)

app.listen(process.env.PORT || 4545, () => {
    console.log('WS LEVANTADO Y CORRIENDO 4545');
});

module.exports = app;