import { Router } from 'express';
import { modelController } from '../controllers/ModelController';

const route = Router();

const modelRouter = (app: Router) => {
    app.use('/models', route);

    route.get('', modelController.getAll)
    route.post('', modelController.createModel);
    route.get('/:id', modelController.find);
    route.put('/:id', modelController.updateModel);

    return app;
}

export default modelRouter;