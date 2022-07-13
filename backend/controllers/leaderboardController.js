const Leaderboard = require('../models/leaderboardModel')
const mongoose = require('mongoose');

const getLeaderboard = async (req,res) => {
    
    const leaderboard = await Leaderboard.find({}).sort({ challenge:-1, clever:-1, })
    
    res.status(200).json(leaderboard)
}

const createLeaderboard = async (req,res) => {
    const {name, challenge, clever} = req.body

    try {
        const leaderboard = await Leaderboard.create({name, challenge, clever})
        res.status(201).json(leaderboard)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getLeaderboard,
    createLeaderboard
}