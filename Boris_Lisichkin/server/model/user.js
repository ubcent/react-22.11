const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        default: 1
    },
    name: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    phone: {
        type: String,
        required: true,
        default: '+7(111)222-33-44'
    },
    company: {
        type: String,
        required: false,
        default: '777 ltd.'
    },
    website: {
        type: String,
        required: false,
        default: 'website.net'
    }
});

module.exports = mongoose.model('User', userSchema);