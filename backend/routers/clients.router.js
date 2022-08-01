import express from 'express';
import controller from '../controllers/ClientsController.js';
//middleware
import { isAuth } from '../middleware/Auth.js';
import { isAdmin } from '../middleware/IsAdmin.js';
import { isSuperAdmin } from '../middleware/IsSuperAdmin.js';

const router = express.Router();
router.route('/')
    .get([isAuth], controller.viewAlls)
    .post([isAuth, isAdmin], controller.register);
router.route('/:id')
    .get([isAuth], controller.viewId)
    .patch([isAuth, isAdmin], controller.update)
    .patch([isAuth, isAdmin], controller.addService)
    .delete([isAuth, isSuperAdmin], controller.deleteEntity);

export default router;