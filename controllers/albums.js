const Album = require("../models/albums");

const getAllAlbums = async (req, res) => {
     const albums = await Album.find()
     res.status(200).json({data: albums})
}

const getAlbumByID = async (req, res) => {
    const {id} = req.params
    const album = await Album.findById(id)
    res.status(200).json({data: album})
}

const addAlbum = async (req, res) => {
    const {title, artist, songs, year} = req.body
    const newAlbum = new Album({
        title,
        artist,
        songs,
        year
    })
    await newAlbum.save()
    res.status(201).json({data: newAlbum})
}

const changeAlbum = async (req, res) => {
    const {id} = req.params;
    const {title, artist, songs, year} = req.body

    const updatedAlbum = await Album.findByIdAndUpdate(
        id,
        {title, artist, songs, year},
        {new: true, runValidators: true}
    )
    res.status(200).json({ data: updatedAlbum });
}

const deleteAlbum = async (req, res) => {
    const {id} = req.params
    await Album.deleteOne({_id: id})
    res.status(200).json({data: 'Ok Album eliminado'})
}

module.exports = {
    getAllAlbums,
    getAlbumByID,
    addAlbum,
    changeAlbum,
    deleteAlbum
}