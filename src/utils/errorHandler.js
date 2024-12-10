const logger = require("../config/logger.config");
const BaseError = require("../errors/base.error");
const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  try {
    
 
  logger.error(err);
  console.log(err);
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {},
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "something went wrong",
    error: err,
    data: {},
  });
} catch (error) {
   console.log(error) 
}
}

module.exports = errorHandler;
