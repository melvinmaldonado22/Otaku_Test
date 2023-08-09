import { Request, Response } from "express";
import usuarioModel from '../models/usuario';

const authUser = async function(req:Request, res:Response){
    try{
        const contraseña = req.body.contraseña;
        const usuario = await usuarioModel.find({usuario:req.body.usuario});
        if(usuario[0].contraseña===contraseña){
            return res.json({
                url: '/seleccion-nivel'
            })
        }else{
            res.json({
                message: 'Contraseña incorrecta'
            });
        }
    } catch (error) {
        res.json({
            message: 'Usuario no encontrado'
        });
    }
}

export { authUser }