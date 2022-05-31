import express from 'express';
import * as cartController from '../controllers/cart.controller.js';

import userAuth from '../middlewares/user.auth.js';

const router = new express.Router();

router.get('/cart', userAuth, cartController.getCart);

router.patch('/cart', userAuth, cartController.updateCart);

router.post('/cart/add-to-cart', userAuth, cartController.addBookToCart);

router.post('/cart/checkout', userAuth, cartController.checkout);

export default router;
