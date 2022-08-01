import express from 'express';
import controller from '../controllers/ServicesController.js';
//middleware
import { isAuth } from '../middleware/Auth.js';
import { isAdmin } from '../middleware/IsAdmin.js';
import { isSuperAdmin } from '../middleware/IsSuperAdmin.js';

const router = express.Router();
router.route('/recent/:cant')
    .get([isAuth], controller.viewRecent);
router.route('/statistics')
    .get([isAuth], controller.viewStatistics)
router.route('/')
    .get([isAuth], controller.viewAlls)
    .post([isAuth, isAdmin], controller.create);
router.route('/:id')
    .get([isAuth], controller.viewId)
    .patch([isAuth, isAdmin], controller.update)
    .delete([isAuth, isSuperAdmin], controller.deleteEntity);

export default router;