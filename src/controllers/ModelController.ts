import { modelRepository } from './../repositories/ModelRepository';
import { Request, Response } from 'express';
import exceptions from '../exceptions';


const getAll = async (req: Request, res: Response) => {
    try {
        let models = await modelRepository.all();
        return res.json(models);
    } catch (err) {
        return exceptions.ServerErrorException(res);
    }
}


const find = async (req: Request, res: Response) => {
    try {
        let model = await modelRepository.find(req.params.id);

        return res.json(model);
    } catch (err) {
        return exceptions.NotFoundException(res);
    }
}

const createModel = async (req: Request, res: Response) => {
    try {
        let newModel = await modelRepository.create(req.body);

        return res.status(201).json(newModel);
    } catch (error) {
        return exceptions.BadRequestException(res, error)
    }
    
}
    
const updateModel = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let updatedModel = await modelRepository.update(id, req.body);

        return res.status(200).json(updatedModel);
    } catch (error) {
        return exceptions.BadRequestException(res, error.errmsg)
    }
}


export const modelController = { getAll, find, createModel, updateModel};