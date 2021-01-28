require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {



    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

app.use(express.json());
app.use(routes);

app.listen(3333);