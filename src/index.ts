import express from 'express';
import './model/database';
import * as dotenv from 'dotenv';
dotenv.config();
import preguntas from './routes/quiz-routes';
import usuarios from './routes/usuario-routes';
import participantes from './routes/participante-routes'
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 8888;

// Middelwares

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Rutas
app.use('/api/preguntas', preguntas);
app.use('/api/participantes', participantes);
app.use('/api/usuarios', usuarios)

app.listen(PORT, ()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
})