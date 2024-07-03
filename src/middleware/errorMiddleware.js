import { CustomError } from '../utils/customErrors.js';

const errorMiddleware = (err, req, res, next) => {
  console.log(err)
  // Check if the error is a custom error
  if (err instanceof CustomError) {
    // Send the custom error message and status code
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Send a generic error message and a 500 status code
  return res.status(500).json({ error: 'Internal Server Error errorMiddleware' });
};

export default errorMiddleware;
