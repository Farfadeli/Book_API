import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import sequelize from './config/database';
import config from './config/config';
import Logging from './library/Logging';
import cors from 'cors';
import cron from 'node-cron';

// Routes
const router = express();

// Sync database and start server
sequelize
    .sync()
    .then(() => {
        Logging.info('SQLite database is connected');
        startServer();
    })
    .catch((error: any) => {
        Logging.error('Unable to connect to the database');
        Logging.error(error);
    });

// Start server function
const startServer = () => {
    cron.schedule('0 0 * * *', () => {
        Logging.info('Running a task every day at 00:00');
    });

    router.use(
        cors({
            origin: ['http://localhost:3000']
        })
    );

    router.use((req: Request, res: Response, next: NextFunction) => {
        Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.originalUrl}] - Ip: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            Logging.info(
                `Server Started -> Method: [${req.method}] - Url: [${req.originalUrl}] - Ip: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
            );
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json({}));

    // The rules of the API
    router.use((req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    // CRUDS

    // Error handling
    router.use((req: Request, res: Response, next: NextFunction) => {
        const error = new Error(`Route not found -> Method: [${req.method}] - Url: [${req.originalUrl}]`);
        Logging.error(error.message);
        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.port, () => Logging.info(`Server is running on port ${config.port}`));
};
