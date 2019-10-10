import { IModel } from '../interfaces/IModel';
import mongoose from 'mongoose';

export type ModelDocument = IModel & mongoose.Document;

const modelSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    secret_code: String
}, {timestamps: true});

export const ModelModel = mongoose.model<ModelDocument>("Model", modelSchema);