import dotenv from 'dotenv';
dotenv.config();

const environments = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
};

export default environments;
