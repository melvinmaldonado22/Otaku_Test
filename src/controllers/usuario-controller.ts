import { Request, Response } from "express";
import usuarioModel from '../models/usuario';

const authUser = async function(req:Request, res:Response){
    try{
        const contraseña = req.body.contraseña;
        if(!req.body.usuario){
            return res.json({
                auth: false,
                message: 'Ingrese un usuario válido'
            })
        }
        const usuario = await usuarioModel.find({usuario:req.body.usuario});
        if(usuario[0].contraseña===contraseña){
            return res.json({
                auth: true,
                url: '/cuestionario.html'
            })
        }else{
            res.json({
                auth: false,
                message: 'Contraseña incorrecta'
            });
        }
    } catch (error) {
        res.json({
            auth: false,
            message: 'Usuario no encontrado'
        });
    }
}

export { authUser }