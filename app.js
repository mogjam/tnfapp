//app.js
const express = require('express');
const bodyParser = require('body-parser');
const player = require('./routes/player'); // Imports routes for the players
const payment = require('./routes/payment'); // Imports routes for the payments
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = '';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
//mongoose.connect(mongoDB);
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/players', player);
app.use('/payments', payment);


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});