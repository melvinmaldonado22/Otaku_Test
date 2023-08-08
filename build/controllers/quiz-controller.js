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
exports.preguntasImg = exports.preguntasAudio = exports.preguntasTexto = void 0;
const quiz_1 = __importDefault(require("../models/quiz"));
const preguntasTexto = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntas = yield quiz_1.default.find({ tipo: 'texto' });
        res.json(preguntas);
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
});
exports.preguntasTexto = preguntasTexto;
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
