import { Request, Response } from "express";
import quizModel from '../models/quiz';

// ::::::::::::::::::::::::::::::: Métodos POST ::::::::::::::::::::::::::::::::::::::::::::

const guardarPreguntaTexto = async (req:Request, res:Response)=>{
    try {
        const nuevaPregunta = new quizModel({
        pregunta: req.body.pregunta,
        opcion1: req.body.opcion1,
        opcion2: req.body.opcion2,
        opcion3: req.body.opcion3,
        opcion4: req.body.opcion4,
        respuesta: req.body.respuesta,
        tipo: req.body.tipo,
        nivel: req.body.nivel,
        universo: req.body.universo,
        anime: req.body.anime
    })
    const result = await nuevaPregunta.save();
    res.json({
        message:'Pregunta guardada con exito!',
        result
    });
    }catch(error){
        res.status(500).json({
            err: error,
            message:'No se pudo guardar la pregunta'
        })
    }
}

const guardarPreguntaAudio = async (req:Request, res:Response)=>{
    const nuevaPregunta = new quizModel({
        pregunta:req.body.pregunta,
        opcion1: req.body.opcion1,
        opcion2: req.body.opcion2,
        opcion3: req.body.opcion3,
        opcion4: req.body.opcion4,
        respuesta: req.body.respuesta,
        tipo: req.body.tipo,
        nivel: req.body.nivel,
        universo: req.body.universo
    })

}

const guardarPreguntaImagen = async (req:Request, res:Response)=>{
    const nuevaPregunta = new quizModel({
        pregunta:req.body.pregunta,
        opcion1: req.body.opcion1,
        opcion2: req.body.opcion2,
        opcion3: req.body.opcion3,
        opcion4: req.body.opcion4,
        respuesta: req.body.respuesta,
        tipo: req.body.tipo,
        nivel: req.body.nivel,
        universo: req.body.universo
    })

}

// ::::::::::::::::::::::::::::::: Métodos GET :::::::::::::::::::::::::::::::::::::::::::::

const preguntasTextoFacil = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'facil'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoMedio = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'medio'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoDificil = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'dificil'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoOtaku = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'otaku'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoAnimeClasico = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'animeClasico'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoManga = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'manga'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoShoujo = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'shoujo'});
        res.json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoHentai = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'hentai'});
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

export { 
    preguntasTextoFacil, 
    preguntasTextoMedio,
    preguntasTextoDificil,
    preguntasTextoOtaku,
    preguntasTextoAnimeClasico,
    preguntasTextoManga,
    preguntasTextoShoujo,
    preguntasTextoHentai,
    preguntasAudio, 
    preguntasImg,
    guardarPreguntaTexto
}