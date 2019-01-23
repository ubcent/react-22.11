const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    id: {
        type: Number,
        required: true,
        default: 1
    },
    name: {
        type: String,
        required: true,
        default: 'id labore ex et quam laborum'
    },
    body: {
        type: String,
        required: true,
        default: 'laudantium enim quasi est quidem magnam'
    }
});

module.exports = mongoose.model('Comment', commentSchema);