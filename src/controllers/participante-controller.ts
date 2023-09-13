import { Request , Response } from "express";
import participanteModel from "../models/participante";

const guardarParticipante = async function(req:Request, res:Response){
    const p = new participanteModel({
        participante: req.body.participante,
        calificacion: req.body.calificacion,
        categoria: req.body.categoria,
        tiempo: req.body.tiempo
    })
    try{
        const nuevoParticipante = await p.save();
        res.status(200).json(nuevoParticipante);
    } catch(error){
        res.status(500).json({
            message: 'No se pudo guardar el participante'
        });
    }
    
}

const obtenerParticipantes = async function(_req:Request, res:Response){
    try{
        const participantes = await participanteModel.find();
        res.status(200).json(participantes);
    }catch(error){
        res.status(500).json({
            message: 'No se puedo obtener los participantes'
        })
    }
}


const borrarParticipante = async (req:Request, res:Response) => {
    try{
        await participanteModel.deleteOne({
            _id:req.params.id
        }),
        res.status(200).json({
            message: 'Se borró el participante con éxito!',
            status: true
        });
    } catch (error){
        res.status(500).json({
            message: 'No se pudo borrar el participant',
            status: false
        });
    }
}

export { 
    guardarParticipante, 
    obtenerParticipantes,
    borrarParticipante
}