const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{type: String, lowercase: true, trim: true, unique: true},
    password: {type: String},
    wallet:{type: String},
})

const User = mongoose.model('User',UserSchema)
module.exports = User;