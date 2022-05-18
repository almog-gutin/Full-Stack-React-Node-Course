import dotenv from 'dotenv';
dotenv.config();

const environments = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
};

export default environments;
