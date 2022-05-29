import express from 'express';
import controller from '../controllers/authController.js';

const router = express.Router();
router.post('/', controller.login);

export default router;
