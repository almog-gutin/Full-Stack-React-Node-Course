import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import enviroments from '../config/environments.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = enviroments.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
