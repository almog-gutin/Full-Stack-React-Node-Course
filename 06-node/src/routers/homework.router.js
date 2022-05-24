import express from 'express';

import * as homeworkController from '../controllers/homework.conroller.js';
import studentAuth from '../middlewares/student.auth.js';

const router = new express.Router();

router.post('/homeworks/new', studentAuth, homeworkController.createHomework);

export default router;
