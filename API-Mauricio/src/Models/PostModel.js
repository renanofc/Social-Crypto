const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    id: ObjectId,
    usuario: String,
    descricao: String,
    moeda: String
});

const PostModel = mongoose.model('posts', PostSchema);

module.exports = PostModel;