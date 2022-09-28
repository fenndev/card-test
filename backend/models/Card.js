const mongoose = require('mongoose');
const { Schema } = mongoose;

const Card = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Amorphous Blob'
    },
    description: {
        type: String,
        required: true,
        default: 'A blob of goo that is not very useful.'
    },
    power: {
        type: Object,
        required: true,
        value: Number,
        color: String,
        default: {
            value: 0,
            color: 'green'
        }
    },
    cost: {
        type: Object,
        required: true,
        value: Number,
        color: String,
        default: {
            value: 0,
            color: 'null'
        }
    },
    image: {
        type: String,
        required: true,
        default: 'localhost:3000/images/placeholder.png'
    }
});
module.exports = mongoose.model("Card", Card);
