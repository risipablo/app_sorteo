const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB)
        console.log("Conexión exitosa a la base de datos, perro")
    } catch(error){
        console.error("Conexión fallida: " + error);
    }
}

module.exports = connectDB
