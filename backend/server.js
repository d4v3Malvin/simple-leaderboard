require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const leaderboardRoutes = require('./routes/leaderboard')
const cors = require('cors');

const app = express()

app.use(express.json())

app.use(cors({ origin: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes

app.use('/api/' + process.env.VERSION + '/leaderboard', leaderboardRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(() => {

    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB and listening on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})