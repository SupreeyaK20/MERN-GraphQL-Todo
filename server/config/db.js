const { connect } = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@graphql-cluster.jcqmzvm.mongodb.net/${process.env.MONGO_DATABASE}`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;