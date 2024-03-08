const express = require("express");
const albumsRouter = require('./routes/albums');
const connectDB = require("./config/db");
require('dotenv').config()

const app = express()
app.use(express.json())

connectDB()

app.use('/albums', albumsRouter)

app.use('*', (req, res) => {
    res.status(404).json({data: 'Not found'})
})

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({data: 'Internal server error'})
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
