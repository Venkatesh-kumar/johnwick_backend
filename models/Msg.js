const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    email:{type: String},
    message: {type: String},
    type:{type: String},
    amount:{type: String},
    date:{type: Date}
})

const Msg = mongoose.model('Msg',MsgSchema)
module.exports = Msg;