import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import enviroments from '../config/environments.js';

import connectToMongoDB from './databases/mongoose.db.js';

import userRouter from './routers/user.router.js';
import cartRouter from './routers/cart.router.js';
import bookRouter from './routers/book.router.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(cartRouter);
app.use(bookRouter);

const PORT = enviroments.PORT;
app.listen(PORT, async () => {
    console.log(`Server is running on PORT: ${PORT}`);

    await connectToMongoDB();
});
