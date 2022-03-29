const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* Important Routes */
const shoppingList = require('./routes/ShoppingList')

app.use('/list', shoppingList);
app.use('/read', shoppingList)


/*Browser Connection Test*/
app.get('/', (req, res) => {
    res.send('We\'re online on port 7001!!!');
});

/* DB CONNECTION */
mongoose.connect('mongodb://localhost:27017/mern-ShoppingList')

/* Listening to Server */
app.listen(7001, () => console.log('Listening on port 7001...'));