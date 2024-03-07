const express = require("express");
const { mongoose } = require("mongoose");
const connectDB  = require("./config/db");
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000

connectDB()

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})


