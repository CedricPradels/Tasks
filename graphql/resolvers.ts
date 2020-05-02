import Task from "../models/Task";

export default {
  Query: {
    async doneTasks() {
      const doneTasks = await Task.find({ done: true });
      return doneTasks;
    },
    async todoTasks() {
      const totoTasks = await Task.find({ done: false });
      return totoTasks;
    },
  },
  Mutation: {
    async createTask(_, { name }) {
      const newTask = await Task.create({ name });
      return newTask;
    },
    async deleteTask(_, { id }) {
      const removedTask = await Task.findByIdAndRemove(id);
      return removedTask;
    },
    async updateTask(_, { id }) {
      const update = { done: true };
      const options = { new: true };
      const updatedTask = await Task.findByIdAndUpdate(id, update, options);
      return updatedTask;
    },
  },
};
