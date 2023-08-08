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
exports.authUser = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const authUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contraseña = req.body.contraseña;
            const usuario = yield usuario_1.default.find({ usuario: req.body.usuario });
            if (usuario[0].contraseña === contraseña) {
                return res.json({
                    url: '/seleccion-nivel'
                });
            }
            else {
                res.status(500).json({
                    message: 'Contraseña incorrecta'
                });
            }
        }
        catch (error) {
            res.status(500).json({
                message: 'Usuario no encontrado'
            });
        }
    });
};
exports.authUser = authUser;
