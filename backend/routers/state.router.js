import express from 'express';
import controller from '../controllers/StateController.js';

const router = express.Router();
router.get('/', controller.viewAlls);

export default router;
