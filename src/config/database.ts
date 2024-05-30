import { Sequelize, Dialect } from 'sequelize';
import config from './config';

// Assurez-vous que les types sont bien définis
const dialect: Dialect = config.database.dialect as Dialect;
const storage = config.database.storage || './database.sqlite';

const sequelize = new Sequelize({
    dialect,
    storage,
    logging: false
});

export default sequelize;
