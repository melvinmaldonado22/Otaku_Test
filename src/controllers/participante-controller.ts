import { Request , Response } from "express";
import participanteModel from "../models/participante";

const guardarParticipante = async function(req:Request, res:Response){
    const p = new participanteModel({
        participante: req.body.participante,
        calificacion: req.body.calificacion 
    })
    try{
        await p.save();
        res.status(200).json(p)
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

export { guardarParticipante , obtenerParticipantes}