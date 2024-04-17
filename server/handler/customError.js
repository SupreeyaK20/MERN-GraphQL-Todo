const { ApolloError } = require('apollo-server-errors');

const CustomError = (errorMsg, errorType) => {
    return new ApolloError(errorMsg, errorType.errorCode, {
      httpStatusCode: errorType.errorStatus
    });
}

module.exports = CustomError;
