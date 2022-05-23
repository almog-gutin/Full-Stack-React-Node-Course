import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = new express.Router();

router.post('/users/signup', userController.createUser);

router.post('/users/login', userController.login);

router.post('/users/:userID/logout', userController.logout);

export default router;
