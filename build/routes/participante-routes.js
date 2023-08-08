"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const participante_controller_1 = require("../controllers/participante-controller");
const router = express_1.default.Router();
router.post('/guardar-participante', participante_controller_1.guardarParticipante);
router.get('/obtener-participantes', participante_controller_1.obtenerParticipantes);
exports.default = router;
