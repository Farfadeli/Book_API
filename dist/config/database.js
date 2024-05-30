"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
const dialect = config_1.default.database.dialect;
const storage = config_1.default.database.storage || './database.sqlite';
const sequelize = new sequelize_1.Sequelize({
    dialect,
    storage,
    logging: false
});
exports.default = sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQStDO0FBQy9DLHNEQUE4QjtBQUc5QixNQUFNLE9BQU8sR0FBWSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFrQixDQUFDO0FBQzVELE1BQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQztBQUUvRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUM7SUFDNUIsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDLENBQUM7QUFFSCxrQkFBZSxTQUFTLENBQUMifQ==