import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotennv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    },
);
sequelize
    .authenticate()
    .then(() => {
        console.log("DATABASE CONECTED");
    })
    .catch((error) => {
        console.log(error);
    });

export default sequelize;
