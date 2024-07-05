import { Sequelize } from "sequelize";
import config from "./config.js";
import { createLogger } from "../utils/utils.js";

const logger = createLogger("database");

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: "mysql",
  }
);

try {
  await sequelize.authenticate();
  logger.info("Connection has been established successfully.");
} catch (error) {
  logger.error("Unable to connect to the database: ", error);
}

export default sequelize;
