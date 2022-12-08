const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    usuario: String,
    email: String,
    moedaF: String,
    Nposts: String
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;