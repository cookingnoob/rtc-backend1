const express = require("express");
const { getAllAlbums, getAlbumByID, addAlbum, changeAlbum, deleteAlbum } = require("../controllers/albums");

const router = express.Router()

router.get('/', getAllAlbums)

router.get('/:id', getAlbumByID)

router.post('/create', addAlbum)

router.put('/edit/:id', changeAlbum)

router.delete('/delete/:id', deleteAlbum)

module.exports = router;