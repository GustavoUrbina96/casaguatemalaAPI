import { ModelModel } from './../models/Model';
import { IModelInput } from '../interfaces/IModel';

const all = () => {
    return ModelModel.find();
}

const find = (id: string) => {
    return ModelModel.findById(id);
}

const create = (modelData: IModelInput) => {
    // Add some validation before Creation

    return ModelModel.create(modelData);
}

const update = (_id: string, modelData) => {
    // Add some validation before Update

    return ModelModel.updateOne({_id}, modelData);
}

export const modelRepository = { all, find, create, update }