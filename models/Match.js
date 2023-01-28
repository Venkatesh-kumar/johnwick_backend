const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    matchID:{type: String, unique: true},
    team1: {type: String},
    team2:{type: String},
})

const Match = mongoose.model('Match',MatchSchema)
module.exports = Match;