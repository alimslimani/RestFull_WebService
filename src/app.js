const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');

const port = process.env.port || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);
/* const authorRouter = require('./routes/authorRouter')(Book); */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to RESTful Web Services with Node.js and Express');
});

app.listen(port, () => {
  console.log(`Runnig on port: ${port}`);
});
