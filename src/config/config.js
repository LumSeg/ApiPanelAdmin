import dotenv from 'dotenv';

dotenv.config();

export const config = {
    jwtSecret: process.env.JWT_SECRET || '',
    tokenExpiration: '1h', 
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/db'
};
