const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: {
        type: Number,
        required: true,
        autoIncrement: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    title: String,
    body: String,
});

//создать модель
module.exports = mongoose.model('Post', postSchema);
