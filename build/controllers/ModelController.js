"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModelRepository_1 = require("./../repositories/ModelRepository");
const exceptions_1 = __importDefault(require("../exceptions"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let models = yield ModelRepository_1.modelRepository.all();
        return res.json(models);
    }
    catch (err) {
        return exceptions_1.default.ServerErrorException(res);
    }
});
const find = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let model = yield ModelRepository_1.modelRepository.find(req.params.id);
        return res.json(model);
    }
    catch (err) {
        return exceptions_1.default.NotFoundException(res);
    }
});
const createModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newModel = yield ModelRepository_1.modelRepository.create(req.body);
        return res.status(201).json(newModel);
    }
    catch (error) {
        return exceptions_1.default.BadRequestException(res, error);
    }
});
const updateModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let updatedModel = yield ModelRepository_1.modelRepository.update(id, req.body);
        return res.status(200).json(updatedModel);
    }
    catch (error) {
        return exceptions_1.default.BadRequestException(res, error.errmsg);
    }
});
exports.modelController = { getAll, find, createModel, updateModel };
