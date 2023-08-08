import {prop , getModelForClass} from '@typegoose/typegoose'

/* NOTA: Habilitar lo siguiente:
    en el archivo tsconfig.json: "experimentalDecorators": true,  para que no haya errores en utilizar
    los decoradores @prop()
    en el archivo tsconfig.json: "strictPropertyInitialization": false, para que no precione con errores
    de inicializacion de las variables 
*/

class usuario {
    @prop({required:true, trim:true, lowercase:true}) // para especificar propiedades de mongoose
    usuario : string 

    @prop({required:true, trim:true, lowercase:true})
    contraseña : string

}

const usuarioModel =  getModelForClass(usuario)
export default usuarioModel