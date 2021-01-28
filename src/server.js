require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

console.log(process.env.APP_NAME);
mongoose.connect('mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.xp1rw.mongodb.net:27017,cluster0-shard-00-01.xp1rw.mongodb.net:27017,cluster0-shard-00-02.xp1rw.mongodb.net:27017/projeto?ssl=true&replicaSet=atlas-l9o817-shard-0&authSource=admin&retryWrites=true&w=majority', {
   

    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

app.use(express.json());
app.use(routes);

app.listen(3333);