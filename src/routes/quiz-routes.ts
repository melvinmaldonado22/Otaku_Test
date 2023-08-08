import express from 'express';
import { preguntasTexto, preguntasAudio, preguntasImg } from "../controllers/quiz-controller";

const router = express.Router();

router.get('/texto', preguntasTexto);
router.get('/audio', preguntasAudio);
router.get('/imagen', preguntasImg);

export default router;