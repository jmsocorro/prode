import bcrypt from "bcrypt";
import winston from "winston";

import config from "../config/config.js";

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

export const createLogger = () => {
    if (config.ENVIROMENT === "PROD") {
        return winston.createLogger({
            levels : {
                fatal: 0, 
                error: 1, 
                warn: 2,
                info: 3,
                http: 4,
                verbose: 5,
                debug: 6,
                trace: 7
            },
            transports: [
                new winston.transports.File({ 
                    filename: "./src/logs/log.log",
                    level: "warn",
                    format: winston.format.json(),
                }),
            ],
        });
    } else {
        return winston.createLogger({
            levels : {
                fatal: 0, 
                error: 1, 
                warn: 2,
                info: 3,
                http: 4,
                verbose: 5,
                debug: 6,
                trace: 7
            },
            transports: [
                new winston.transports.Console({
                    level: "trace",
                    format: winston.format.simple(),
                }),
            ],
        });
    }
}