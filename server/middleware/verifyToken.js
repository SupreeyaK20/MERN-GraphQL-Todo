const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { ErrorTypes, ErrorMsg } = require("../utils/constant");
const CustomError = require("../handler/customError");
require("dotenv").config();

const extractOperationName = (query) => {
  const operationPattern = /query|mutation\s+(\w+)/;
  const match = query.match(operationPattern);
  return match ? match[1] : null;
};

const verifyToken = async (req, res, next) => {
  const operationName = extractOperationName(req.body.query);

  // Check if the operation name is 'login' or 'register'
  if (operationName === "login" || operationName === "register") {
    return {};
  }

  let token = "";

  try {
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      throw CustomError(ErrorMsg.USER_NOT_EXIST, ErrorTypes.USER_NOT_EXIST);
    }

    return { user };
  } catch (error) {
    throw CustomError(ErrorMsg.INVALID_TOKEN, ErrorTypes.UNAUTHORIZED);
  }
};

module.exports = verifyToken;
