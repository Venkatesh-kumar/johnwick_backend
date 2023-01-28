const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BetSchema = new Schema({
    matchID:{type: String},
    betID:{type: String, unique: true},
    p1:{type:String},
    p2:{type:String},
    bvt1: {type: String},
    bvt2:{type: String},
    ba:{type:String},
    bt:{type:String},
    bs:{type:String}
})

const Bet = mongoose.model('Bet',BetSchema)
module.exports = Bet;