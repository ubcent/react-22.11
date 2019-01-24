const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: true,
        default: 'Unknown',
    },
    phone: String,
    company: String,
    website: String,

});

//создать модель
module.exports = mongoose.model('User', userSchema);
