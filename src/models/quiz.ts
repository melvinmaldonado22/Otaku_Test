import {prop , getModelForClass} from '@typegoose/typegoose'

/* NOTA: Habilitar lo siguiente:
    en el archivo tsconfig.json: "experimentalDecorators": true,  para que no haya errores en utilizar
    los decoradores @prop()
    en el archivo tsconfig.json: "strictPropertyInitialization": false, para que no precione con errores
    de inicializacion de las variables 
*/

class pregunta {
    @prop({required:true, trim:true}) // para especificar propiedades de mongoose
    pregunta : string 

    @prop()
    opcion1 : string

    @prop()
    opcion2 : string

    @prop()
    opcion3 : string

    @prop()
    opcion4: string

    @prop({required:true})
    tipo: string

    @prop({required:true})
    nivel: string

    @prop({required:true})
    respuesta : string

    @prop({required:true})
    universo : string

    @prop({required:true})
    anime : string
}

const quizModel =  getModelForClass(pregunta)
export default quizModel