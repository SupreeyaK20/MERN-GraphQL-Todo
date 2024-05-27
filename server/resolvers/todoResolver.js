const axios = require("axios");
const Todo = require("../models/Todo");
const User = require("../models/User");

const todoResolver = {
  Query: {
    getTodos: async (_, __, context) => {
      try {
        const todos = await Todo.find().populate('userId');

        const populatedTodos = todos.map(todo => ({
          ...todo.toObject(),
          user: todo.userId 
        }));
        return populatedTodos;
        return todos; 
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
    },
    getUsersTodo: async (_, __, context) => {
      try {
        const userId = context.user.id;
        const todos = await Todo.find({ userId })

        return todos;
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
    }
  },
  Mutation: {
    createTodo: async (_, { title, description, isCompleted }, context) => {
      try {
        const { user } = context;

        if (!user) {
          throw new AuthenticationError('You must be logged in to create a todo');
        }

        // Extract the user ID from the context
        const userId = user.id;

        // Create the todo with the provided data and user ID
        const todo = new Todo({
          title,
          description,
          isCompleted,
          userId
        });

        // Save the todo to the database
        await todo.save();

        return todo;
      } catch (error) {
          console.log(error);
        }
      },
  }
};

module.exports = todoResolver;
