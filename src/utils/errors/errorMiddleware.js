/*import { CustomError } from './customErrors.js';

const errorMiddleware = (err, req, res, next) => {
  console.log(err)
  // Check if the error is a custom error
  if (err instanceof CustomError) {
    // Send the custom error message and status code
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Send a generic error message and a 500 status code
  return res.status(500).json({ error: 'Internal Server Error errorMiddleware' });
};*/

import EErrors from "./enums.js";
import { createLogger } from "../utils.js";

const logger = createLogger();

const errorMiddleware = (error, req, res, next) => {
    logger.error(Date.now() + " / " + error.cause);
    logger.info(error);
    if (Object.values(EErrors).includes(error.code)) {
        res.status(error.code).send({
            status: error.code,
            error: error.name,
            cause: error.cause,
            message: error.message,
        });
    } else {
        res.send({
            status: "error",
            error: "Error no manejado",
            cause: "Desconocida",
            message: "Error no manejado"
        });
    }
};

export default errorMiddleware;
