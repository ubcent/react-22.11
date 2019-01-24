const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Unknown',
    }
});

//создать модель
module.exports = mongoose.model('Animal', animalSchema);
