const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
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
    body: Text,
});

//создать модель
module.exports = mongoose.model('Animal', commentSchema);
