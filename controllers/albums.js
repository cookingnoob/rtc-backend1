const Album = require("../models/albums");

const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Album.find()
        res.status(200).json({data: albums})
    } catch (error) {
        next(error)       
    }
}

const getAlbumByID = async (req, res, next) => {
    const {id} = req.params
    try{
        const album = await Album.findById(id)
        res.status(200).json({data: album})
    } catch (error){
        next(error)
    }
}

const addAlbum = async (req, res, next) => {
    const {title, artist, songs, year} = req.body
    try{
        const newAlbum = new Album({
            title,
            artist,
            songs,
            year
        })
        await newAlbum.save()
        res.status(201).json({data: newAlbum})
    }catch(error){
        next(error)
    }
}

const changeAlbum = async (req, res, next) => {
    const {id} = req.params;
    try{
        const updatedAlbum = await Album.findByIdAndUpdate(
            id,
            req.body,
            {new: true, runValidators: true}
        )
        res.status(200).json({ data: updatedAlbum });
    } catch(error){
        next(error)
    }
}

const deleteAlbum = async (req, res, next) => {
    const {id} = req.params
    try{
        await Album.deleteOne({_id: id})
        res.status(200).json({data: 'Ok Album eliminado'})
    }catch (error){
        next(error)
    }
}

module.exports = {
    getAllAlbums,
    getAlbumByID,
    addAlbum,
    changeAlbum,
    deleteAlbum
}