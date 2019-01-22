const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        required: true,
        default: '777 ltd.'
    },
    website: {
        type: String,
        required: true,
        default: 'website.net'
    }
});

module.exports = mongoose.model('User', userSchema);