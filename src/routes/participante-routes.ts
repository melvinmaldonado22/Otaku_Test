import express from 'express'
import { 
    borrarParticipante, 
    guardarParticipante , 
    obtenerParticipantes
} from '../controllers/participante-controller'

const router = express.Router();

// ::::::::::::::::::: Rutas POST :::::::::::::::::::::::::::::::::

router.post('/guardar-participante', guardarParticipante);

// ::::::::::::::::::: Rutas GET ::::::::::::::::::::::::::::::::::

router.get('/obtener-participantes', obtenerParticipantes);

// ::::::::::::::::::: Rutas DELETE :::::::::::::::::::::::::::::::

router.delete('/borrar-participantes/:id', borrarParticipante);

export default router;