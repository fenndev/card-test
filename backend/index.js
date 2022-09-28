require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Card = require('./models/Card');


const app = express();
app.use(express.static('frontend'));
mongoose.connect(process.env.DATABASE_URL);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/index.html'));
});
app.use(express.json());
app.post('/cards', async (req, res) => {
    const newCard = new Card({
        name: req.body.name,
        description: req.body.description,
        power: {
            value: req.body.power,
            color: req.body.color
        },
        cost: {
            amount: req.body.cost,
            color: req.body.costColor
        }
    });
    console.log(newCard);
    await newCard.save().then((code) => {
        console.log(code)
    }).catch(err => {
        console.log(err)
    });
});

app.listen(process.env.PORT);