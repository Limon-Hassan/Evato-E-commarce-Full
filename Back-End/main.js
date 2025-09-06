let express = require('express');
require('dotenv').config();
var cookieParser = require('cookie-parser');
const router = require('./Router/main');
const dbConnection = require('./Config/dbconfig');
const { ErrorCheck } = require('./Halper/ErrorCheck');
let cors = require('cors');
let app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/productPhoto', express.static('productPhoto'));
app.use(router);
app.use(ErrorCheck);
dbConnection();
app.get('/', (req, res) => {
  res.send('Hello World !');
});

module.exports = app;
