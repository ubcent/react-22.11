const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const postSchema = new Schema({
    userId: { type: Number },
    title: { type: String },
    body: { type: String },
    postId: { type: String, default: '1'},
});

postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', postSchema);