import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    database: {
        dialect: process.env.DIALECT,
        storage: process.env.STORAGE
    }
};
