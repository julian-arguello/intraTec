import express from 'express';
import controller from '../controllers/usersController.js';
//middleware
import { isAuth } from '../middleware/Auth.js';
import { isSuperAdmin } from '../middleware/IsSuperAdmin.js';
import { authEdit } from '../middleware/AuthEdit.js';

const router = express.Router();
router.route('/')
    .get([isAuth, isSuperAdmin], controller.viewAlls)
    .post([isAuth, isSuperAdmin], controller.register);
router.route('/roles')
    .get([isAuth, isSuperAdmin], controller.viewRoles);
router.route('/:id')
    .get([isAuth, isSuperAdmin], controller.viewId)
    .patch([isAuth, authEdit], controller.update)
    .delete([isAuth, isSuperAdmin], controller.deleteEntity);

export default router;