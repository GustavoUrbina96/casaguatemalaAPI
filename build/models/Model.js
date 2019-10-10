"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const modelSchema = new mongoose_1.default.Schema({
    name: { type: String, unique: true },
    secret_code: String
}, { timestamps: true });
exports.ModelModel = mongoose_1.default.model("Model", modelSchema);
