const axios = require("axios");

const todoResolver = {
  Query: {
    allTodos: async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const user = response.data;
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createTodo: async (_, { title, completed }) => {
        try {
          const response = await axios.post(
            "https://jsonplaceholder.typicode.com/todos",
            {
              title,
              completed,
            }
          );
          return response.data;
        } catch (error) {
          console.log(error);
        }
      },
  }
};

module.exports = todoResolver;
