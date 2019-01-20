const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  name: {type: String, required: true},
  body: {type: String, required: true}
});

module.exports = mongoose.model('commentsDB', commentsSchema);