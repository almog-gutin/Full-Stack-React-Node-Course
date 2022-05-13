import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
// dotenv.config({ path: '../.env' });

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);

    console.log('ALmog');
});
