const express = require("express");
const { mongoose } = require("mongoose");
const connectDB  = require("./config/db");
const albums = require("./config/seeds/albums");
const seedAlbums = require("./config/seeds/seedAlbums");
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000

connectDB()
    // .then(() => {
    //     seedAlbums()
    //     console.log('ya opero la funcion seedAlbums()')
    // })
    // .catch((error) => console.log('fallo la conexion o el seeding',error))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})


