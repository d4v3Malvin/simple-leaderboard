const express = require('express');
const {
    getLeaderboard,
    createLeaderboard
} = require('../controllers/leaderboardController')

const router = express.Router()

//get all leaderboard

router.get('/', getLeaderboard)

//POST a new leaderboard

router.post('/', createLeaderboard)

module.exports = router