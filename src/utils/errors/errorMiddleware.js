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
      message: "Error no manejado",
    });
  }
};

export default errorMiddleware;
