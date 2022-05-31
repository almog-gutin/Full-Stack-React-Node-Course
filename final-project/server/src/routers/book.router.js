import express from 'express';
import * as bookController from '../controllers/book.controller.js';

const router = new express.Router();

router.get('/books', bookController.getBooks);

router.get('/books/:id', bookController.getBook);

// router.post('/books/new', bookController.createBook);

export default router;
