const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class InternalServerError extends BaseError {
  constructor(propertyName, details) {
    super(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `something went wrong `,
      details
    );
  }
}
module.exports = InternalServerError;
