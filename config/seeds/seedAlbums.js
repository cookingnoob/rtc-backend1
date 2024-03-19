const Album = require('../../models/albums')
const albums = require('./albums')

const seedAlbums = async () => {
    try{
        await Album.insertMany(albums)
        console.log('se logro agregar la seed')

        // await Album.deleteMany()
        // console.log('se borraron las semillas')
    }catch(error){
        console.log('Error con la seed de los álbumes', error)
    }
}

module.exports = seedAlbums