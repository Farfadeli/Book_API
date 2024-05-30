"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const database_1 = __importDefault(require("./config/database"));
const config_1 = __importDefault(require("./config/config"));
const Logging_1 = __importDefault(require("./library/Logging"));
const cors_1 = __importDefault(require("cors"));
const node_cron_1 = __importDefault(require("node-cron"));
const router = (0, express_1.default)();
database_1.default
    .sync()
    .then(() => {
    Logging_1.default.info('SQLite database is connected');
    startServer();
})
    .catch((error) => {
    Logging_1.default.error('Unable to connect to the database');
    Logging_1.default.error(error);
});
const startServer = () => {
    node_cron_1.default.schedule('0 0 * * *', () => {
        Logging_1.default.info('Running a task every day at 00:00');
    });
    router.use((0, cors_1.default)({
        origin: ['http://localhost:3000']
    }));
    router.use((req, res, next) => {
        Logging_1.default.info(`Incoming -> Method: [${req.method}] - Url: [${req.originalUrl}] - Ip: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            Logging_1.default.info(`Server Started -> Method: [${req.method}] - Url: [${req.originalUrl}] - Ip: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json({}));
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    router.use((req, res, next) => {
        const error = new Error(`Route not found -> Method: [${req.method}] - Url: [${req.originalUrl}]`);
        Logging_1.default.error(error.message);
        return res.status(404).json({ message: error.message });
    });
    http_1.default.createServer(router).listen(config_1.default.port, () => Logging_1.default.info(`Server is running on port ${config_1.default.port}`));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFtRTtBQUNuRSxnREFBd0I7QUFDeEIsaUVBQTBDO0FBQzFDLDZEQUFxQztBQUNyQyxnRUFBd0M7QUFDeEMsZ0RBQXdCO0FBQ3hCLDBEQUE2QjtBQUc3QixNQUFNLE1BQU0sR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUd6QixrQkFBUztLQUNKLElBQUksRUFBRTtLQUNOLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDUCxpQkFBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzdDLFdBQVcsRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ2xCLGlCQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbkQsaUJBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFHUCxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7SUFDckIsbUJBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUM1QixpQkFBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLEdBQUcsQ0FDTixJQUFBLGNBQUksRUFBQztRQUNELE1BQU0sRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3BDLENBQUMsQ0FDTCxDQUFDO0lBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1FBQzNELGlCQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxXQUFXLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3BILEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNsQixpQkFBTyxDQUFDLElBQUksQ0FDUiw4QkFBOEIsR0FBRyxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsV0FBVyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxnQkFBZ0IsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUM1SSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtRQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsK0RBQStELENBQUMsQ0FBQztRQUM1RyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLENBQUM7WUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFLSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFDM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsK0JBQStCLEdBQUcsQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbEcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxjQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEgsQ0FBQyxDQUFDIn0=