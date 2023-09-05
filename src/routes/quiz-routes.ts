import express from 'express';
import { 
    preguntasTextoFacil, 
    preguntasAudio, 
    preguntasImg, 
    preguntasTextoMedio, 
    preguntasTextoDificil, 
    preguntasTextoOtaku, 
    preguntasTextoAnimeClasico,
    preguntasTextoManga,
    preguntasTextoShoujo,
    preguntasTextoHentai,
    guardarPreguntaTexto
} from "../controllers/quiz-controller";

const router = express.Router();

router.get('/texto-facil', preguntasTextoFacil);
router.get('/texto-medio', preguntasTextoMedio);
router.get('/texto-dificil', preguntasTextoDificil);
router.get('/texto-otaku', preguntasTextoOtaku);
router.get('/texto-animeClasico', preguntasTextoAnimeClasico);
router.get('/texto-manga', preguntasTextoManga);
router.get('/texto-shoujo', preguntasTextoShoujo);
router.get('/texto-hentai', preguntasTextoHentai);
router.get('/audio', preguntasAudio);
router.get('/imagen', preguntasImg);

router.post('/guardarPregunta-texto', guardarPreguntaTexto)

export default router;