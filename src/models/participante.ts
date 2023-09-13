import {prop , getModelForClass} from '@typegoose/typegoose'

/* NOTA: Habilitar lo siguiente:
    en el archivo tsconfig.json: "experimentalDecorators": true,  para que no haya errores en utilizar
    los decoradores @prop()
    en el archivo tsconfig.json: "strictPropertyInitialization": false, para que no presione con errores
    de inicializacion de las variables 
*/

class participante {
    @prop({required:true, trim:true, lowercase:true}) // para especificar propiedades de mongoose
    participante : string 

    @prop({required:true})
    calificacion : number

    @prop({required:true})
    categoria : string 

    @prop({required:true})
    tiempo : string 
}

const participanteModel =  getModelForClass(participante)
export default participanteModel