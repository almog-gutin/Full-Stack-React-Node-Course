import express from 'express';

import userAuth from '../middlewares/user.auth.js';
import * as taskController from '../controllers/task.controller.js';

const router = new express.Router();

router.get('/tasks', userAuth, taskController.getTasks);

router.post('/tasks/new', userAuth, taskController.createTask);

router.delete('/tasks/:taskID', userAuth, taskController.deleteTask);

export default router;
