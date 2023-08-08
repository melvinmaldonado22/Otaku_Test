import mongoose from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config()

async function conectarMongo(){
    const db = await mongoose.connect(process.env.MONGO_URI as string)
    console.log('Se conectó a la base de datos: ' , db.connection.db.databaseName);
}

module.exports = conectarMongo()