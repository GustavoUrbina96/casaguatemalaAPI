"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ModelsRoutes_1 = __importDefault(require("./ModelsRoutes"));
const router = () => {
    const apiRoutes = express_1.Router();
    // Apply model Routes to the app
    ModelsRoutes_1.default(apiRoutes);
    return apiRoutes;
};
exports.default = router;
