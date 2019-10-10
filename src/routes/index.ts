import { Router } from "express";
import modelRouter from "./ModelsRoutes";

const router = () => {
    const apiRoutes = Router();
    // Apply model Routes to the app
    modelRouter(apiRoutes);

    return apiRoutes;
}

export default router;