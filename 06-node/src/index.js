import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import environments from '../config/environments.js';

import studentRouter from './routers/student.router.js';

dotenv.config();
// dotenv.config({ path: '../.env' });

const PORT = environments.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
