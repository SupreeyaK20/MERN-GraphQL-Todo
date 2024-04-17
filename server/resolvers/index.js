const todoResolver = require("./todoResolver");
const userResolver = require("./userResolver");

const resolvers = [
    userResolver,
    todoResolver
];

module.exports = resolvers