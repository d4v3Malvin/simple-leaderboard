const mongoose = require('mongoose');

const Schema = mongoose.Schema

const leaderboardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    challenge: {
        type: Number,
        required: true
    },
    clever : {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Leaderboard', leaderboardSchema)