import express from 'express';
import * as userController from '../controllers/user.controller.js';

import userAuth from '../middlewares/user.auth.js';

const router = new express.Router();

router.post('/users/signup', userController.createUser);

router.post('/users/login', userController.login);

router.post('/users/logout', userAuth, userController.logout);

export default router;
