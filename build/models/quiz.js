"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
/* NOTA: Habilitar lo siguiente:
    en el archivo tsconfig.json: "experimentalDecorators": true,  para que no haya errores en utilizar
    los decoradores @prop()
    en el archivo tsconfig.json: "strictPropertyInitialization": false, para que no precione con errores
    de inicializacion de las variables
*/
class pregunta {
}
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true }) // para especificar propiedades de mongoose
    ,
    __metadata("design:type", String)
], pregunta.prototype, "pregunta", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], pregunta.prototype, "opcion1", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], pregunta.prototype, "opcion2", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], pregunta.prototype, "opcion3", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], pregunta.prototype, "opcion4", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], pregunta.prototype, "tipo", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], pregunta.prototype, "respuesta", void 0);
const quizModel = (0, typegoose_1.getModelForClass)(pregunta);
exports.default = quizModel;
