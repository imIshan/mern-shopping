const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body Parser
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// DB Connection
mongoose
    .connect(db, { useNewUrlParser: true } )
    .then(() => console.log('Mongo DB Connected'))
    .catch((err) => console.log('Mongo Connect Error ', err));

app.use('/api/items', items);

// Server Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));