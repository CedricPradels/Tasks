import Task from "../models/Task";
import User from "../models/User";
import {
  generateAuthentication,
  checkPassword,
} from "../helpers/authentication";

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
    async signin(_, { email, password }) {
      const conditions = { email };
      const queryUser = await User.findOne(conditions).lean(true);
      const { hash, token, salt } = queryUser;
      const isLogged = checkPassword(password, hash, salt);
      return { isLogged, token: isLogged ? token : null };
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
    async signup(_, { email, password }) {
      const authentication = generateAuthentication(password);
      const newUser = await User.create({ ...authentication, email });
      return newUser;
    },
  },
};
