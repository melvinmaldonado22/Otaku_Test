import { Request, Response } from "express";
import quizModel from '../models/quiz';

const preguntasTexto = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasAudio = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'audio'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasImg = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'imagen'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

export { preguntasTexto, preguntasAudio, preguntasImg }