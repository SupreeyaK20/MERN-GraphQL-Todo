const ErrorTypes = {
    EMAIL_EXIST: {
      errorCode: 'EMAIL_EXIST',
      errorStatus: 404
    },
    NOT_FOUND: {
      errorCode: 'NOT_FOUND',
      errorStatus: 404
    },
    INCORRECT_FORMAT: {
      errorCode: 'INCORRECT_FORMAT',
      errorStatus: 400 
    },
    SERVER_ERROR: {
      errorCode: 'SERVER_ERROR',
      errorStatus: 500 
    },
    MISSING_TOKEN: {
      errorCode: 'MISSING_TOKEN',
      errorStatus: 401 
    },
    UNAUTHORIZED: {
      errorCode: 'UNAUTHORIZED',
      errorStatus: 401 
    },
    INVALID_CREDENTIALS: {
      errorCode: 'INVALID_CREDENTIALS',
      errorStatus: 401 
    },
    USER_NOT_EXIST: {
      errorCode: 'USER_NOT_EXIST',
      errorStatus: 404 
    }
  };


const ErrorMsg = {
    EMAIL_EXIST: 'Email already exists',
    NOT_FOUND: 'Resource not found',
    INCORRECT_FORMAT: 'Incorrect format',
    SERVER_ERROR: 'Internal server error',
    INVALID_TOKEN: 'Invalid Token',
    UNAUTHORIZED: 'Unauthorized access',
    INVALID_CREDENTIALS: 'Invalid credentials',
    USER_NOT_EXIST: 'User does not exist'
  };
  
  
  module.exports = {ErrorTypes, ErrorMsg};
  