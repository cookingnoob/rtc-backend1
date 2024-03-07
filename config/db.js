const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log('Conexión a la base de datos establecida');
    }catch(error){
        console.log('error al conectarse a la db', error)
    }
}

module.exports= connectDB