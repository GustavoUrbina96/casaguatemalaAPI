"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ModelController_1 = require("../controllers/ModelController");
const route = express_1.Router();
const modelRouter = (app) => {
    app.use('/models', route);
    route.get('', ModelController_1.modelController.getAll);
    route.post('', ModelController_1.modelController.createModel);
    route.get('/:id', ModelController_1.modelController.find);
    route.put('/:id', ModelController_1.modelController.updateModel);
    return app;
};
exports.default = modelRouter;
