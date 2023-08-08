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
exports.obtenerParticipantes = exports.guardarParticipante = void 0;
const participante_1 = __importDefault(require("../models/participante"));
const guardarParticipante = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = new participante_1.default({
            participante: req.body.participante,
            calificacion: req.body.calificacion
        });
        try {
            yield p.save();
            res.status(200).json(p);
        }
        catch (error) {
            res.status(500).json({
                message: 'No se pudo guardar el participante'
            });
        }
    });
};
exports.guardarParticipante = guardarParticipante;
const obtenerParticipantes = function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const participantes = yield participante_1.default.find();
            res.status(200).json(participantes);
        }
        catch (error) {
            res.status(500).json({
                message: 'No se puedo obtener los participantes'
            });
        }
    });
};
exports.obtenerParticipantes = obtenerParticipantes;
