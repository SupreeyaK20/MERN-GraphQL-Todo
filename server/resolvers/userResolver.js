const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {ErrorTypes, ErrorMsg} = require("../utils/constant");
const CustomError =  require('../handler/customError')
const User = require("../models/User");

const userResolver = {
  Query: {
    allUsers: async () => {
      try {
        const user = await User.find();

        return user;
      } catch (error) {
        console.log(error);
      }
    },
    
  },
  Mutation: {
    register: async (_, { email, password }) => {
      try {
        const isEmailExist = await User.findOne({ email });

        if (isEmailExist) {
          return CustomError(ErrorMsg.EMAIL_EXIST, ErrorTypes.EMAIL_EXIST);
        }

        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailFormat)) {
          return CustomError(ErrorMsg.INCORRECT_FORMAT, ErrorTypes.INCORRECT_FORMAT);
        }

        const username = email.split("@")[0];
        const hashpassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          username,
          email,
          password: hashpassword,
          role: "admin",
        });

        await newUser.save();
        return newUser;
      } catch (error) {
        return CustomError(ErrorMsg.SERVER_ERROR, ErrorTypes.SERVER_ERROR);
      }
    },
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return CustomError(ErrorMsg.USER_NOT_EXIST, ErrorTypes.USER_NOT_EXIST);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
   
        if (!isValidPassword) {
          return CustomError(ErrorMsg.INVALID_CREDENTIALS, ErrorTypes.INVALID_CREDENTIALS);
        }

        const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        return { token, user };
      } catch (error) {
        return CustomError(ErrorMsg.SERVER_ERROR, ErrorTypes.SERVER_ERROR);
      }
    },
  },
};

module.exports = userResolver;
