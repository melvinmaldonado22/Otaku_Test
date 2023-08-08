import express from 'express'
import { guardarParticipante , obtenerParticipantes} from '../controllers/participante-controller'

const router = express.Router();

router.post('/guardar-participante', guardarParticipante);
router.get('/obtener-participantes', obtenerParticipantes);

export default router;