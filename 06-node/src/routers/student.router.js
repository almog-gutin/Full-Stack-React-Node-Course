import express from 'express';

import * as studentController from '../controllers/student.controller.js';

const router = new express.Router();

router.get('/students', studentController.getStudents);

router.post('/students/new', studentController.createStudent);

router.get('/students/:studentName/:age', studentController.doesStudentExists);

router.get('/students/get', studentController.getStudentsByIndex);

export default router;
