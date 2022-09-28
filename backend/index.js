require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Card = require('./models/Card');


const app = express();
app.use(express.static('frontend'));
//mongoose.connect(process.env.DATABASE_URL);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/index.html'));
});
app.use(express.json());
app.post('/cards', (req, res) => {
    console.log(req.body);
    res.end();
});

app.listen(process.env.PORT);