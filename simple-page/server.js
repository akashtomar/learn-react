const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/index');

app.set('view engine', 'ejs');
/**
 * mongodb connection
 */
mongoose.connect('mongodb://localhost:27017/sandbox', {useNewUrlParser: true});
/**
 * body parser
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);



app.listen(3000, ()=>{
    console.log("running @", 3000);
});