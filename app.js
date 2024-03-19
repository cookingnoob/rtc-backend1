const express = require("express");
const albumsRouter = require('./routes/albums');
const connectDB = require("./config/db");
const seedAlbums = require("./config/seeds/seedAlbums");
require('dotenv').config()

const app = express()
app.use(express.json())

connectDB()
// seedAlbums()
app.use('/albums', albumsRouter)

app.all('*', async (req, res, next) => {
    const err = new Error(`Error, not found`)
    err.status = 'fail'
    err.statusCode = 404
    next(err)
})

app.use(async (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status == error.status || 'error'
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
