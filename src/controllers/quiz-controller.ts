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
    res.status(200).json({
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
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'facil', universo:'anime'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoMedio = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'medio', universo:'anime'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoDificil = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'dificil', universo:'anime'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoOtaku = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'otaku'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoAnimeClasico = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , universo:'animeClasico'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoManga = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , universo:'manga'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoShoujo = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'shoujo'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasTextoHentai = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'texto' , nivel:'hentai'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasAudio = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'audio'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

const preguntasImg = async (_req: Request, res: Response) =>{
    try{
        const preguntas = await quizModel.find({tipo:'imagen'});
        res.status(200).json(preguntas);
    } catch (error){
        res.status(500).json({
            message: 'No se pudo obtener las preguntas'
        });
    }
};

// ::::::::::::::::::::::::::::::: Métodos Update :::::::::::::::::::::::::::::::::::::::::::::

const editarPregunta = async (req: Request, res: Response) =>{
    try{
    await quizModel.updateOne({
        _id:req.params.id
    }, 
    {
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
        res.status(200).json({
            message:'Pregunta actualizada con exito!',
            status: true
        });
    } catch (error){
        res.status(500).json({
            message: 'No se pudo actualizar la pregunta',
            status: false
        });
    }
};

// ::::::::::::::::::::::::::::::: Métodos Delete :::::::::::::::::::::::::::::::::::::::::::::

const borrarPregunta = async (req: Request, res: Response) =>{
    try{
    await quizModel.deleteOne({
        _id:req.params.id
    }),
        res.status(200).json({
            message: 'Se borró la pregunta con éxito!',
            status: true
        });
    } catch (error){
        res.status(500).json({
            message: 'No se pudo borrar la pregunta',
            status: false
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
    guardarPreguntaTexto,
    borrarPregunta,
    editarPregunta
}