"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardarPreguntaTexto = exports.preguntasImg = exports.preguntasAudio = exports.preguntasTextoHentai = exports.preguntasTextoShoujo = exports.preguntasTextoManga = exports.preguntasTextoAnimeClasico = exports.preguntasTextoOtaku = exports.preguntasTextoDificil = exports.preguntasTextoMedio = exports.preguntasTextoFacil = void 0;
const quiz_1 = __importDefault(require("../models/quiz"));
// ::::::::::::::::::::::::::::::: Métodos POST ::::::::::::::::::::::::::::::::::::::::::::
const guardarPreguntaTexto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevaPregunta = new quiz_1.default({
            pregunta: req.body.pregunta,
            opcion1: req.body.opcion1,
            opcion2: req.body.opcion2,
            opcion3: req.body.opcion3,
            opcion4: req.body.opcion4,
            respuesta: req.body.respuesta,
            tipo: req.body.tipo,
            nivel: req.body.nivel,
            universo: req.body.universo,
            anime: req.body.anime
        });
        const result = yield nuevaPregunta.save();
        res.json({
            message: 'Pregunta guardada con exito!',
            result
        });
    }
    catch (error) {
        res.status(500).json({
            err: error,
            message: 'No se pudo guardar la pregunta'
        });
    }
});
exports.guardarPreguntaTexto = guardarPreguntaTexto;
const guardarPreguntaAudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaPregunta = new quiz_1.default({
        pregunta: req.body.pregunta,
        opcion1: req.body.opcion1,
        opcion2: req.body.opcion2,
        opcion3: req.body.opcion3,
        opcion4: req.body.opcion4,
        respuesta: req.body.respuesta,
        tipo: req.body.tipo,
        nivel: req.body.nivel,
        universo: req.body.universo
    });
});
const guardarPreguntaImagen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaPregunta = new quiz_1.default({
        pregunta: req.body.pregunta,
        opcion1: req.body.opcion1,
        opcion2: req.body.opcion2,
        opcion3: req.body.opcion3,
        opcion4: req.body.opcion4,
        respuesta: req.body.respuesta,
        tipo: req.body.tipo,
        nivel: req.body.nivel,
        universo: req.body.universo
    });
});
// ::::::::::::::::::::::::::::::: Métodos GET :::::::::::::::::::::::::::::::::::::::::::::
const preguntasTextoFacil = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'fácil' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoFacil = preguntasTextoFacil;
const preguntasTextoMedio = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'medio' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoMedio = preguntasTextoMedio;
const preguntasTextoDificil = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'dificil' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoDificil = preguntasTextoDificil;
const preguntasTextoOtaku = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'otaku' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoOtaku = preguntasTextoOtaku;
const preguntasTextoAnimeClasico = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'animeClasico' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoAnimeClasico = preguntasTextoAnimeClasico;
const preguntasTextoManga = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'manga' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoManga = preguntasTextoManga;
const preguntasTextoShoujo = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'shoujo' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoShoujo = preguntasTextoShoujo;
const preguntasTextoHentai = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto', nivel: 'hentai' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTextoHentai = preguntasTextoHentai;
const preguntasAudio = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'audio' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasAudio = preguntasAudio;
const preguntasImg = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'imagen' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasImg = preguntasImg;
