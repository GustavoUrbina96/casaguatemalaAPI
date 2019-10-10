"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./../models/Model");
const all = () => {
    return Model_1.ModelModel.find();
};
const find = (id) => {
    return Model_1.ModelModel.findById(id);
};
const create = (modelData) => {
    // Add some validation before Creation
    return Model_1.ModelModel.create(modelData);
};
const update = (_id, modelData) => {
    // Add some validation before Update
    return Model_1.ModelModel.updateOne({ _id }, modelData);
};
exports.modelRepository = { all, find, create, update };
