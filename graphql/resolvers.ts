import Task from "../models/Task";
import User from "../models/User";
import {
  generateAuthentication,
  checkPassword,
} from "../helpers/authentication";

export default {
  Query: {
    async doneTasks(_, { token }) {
      const { _id } = await User.findOne({ token }).lean(true);
      const doneTasks = await Task.find({ user: _id, done: true }).populate(
        "user"
      );
      return doneTasks;
    },
    async todoTasks(_, { token }) {
      const { _id } = await User.findOne({ token }).lean(true);
      const totoTasks = await Task.find({ user: _id, done: false });
      return totoTasks;
    },
    async login(_, { email, password }) {
      const userQuery = await User.findOne({ email }).lean(true);
      if (userQuery === null) {
        return null;
      } else {
        const { hash, token, salt } = userQuery;
        const isLogged = checkPassword(password, hash, salt);
        if (!isLogged) {
          return null;
        }
        return { token, email: userQuery.email };
      }
    },
    async getEmail(_, { token }) {
      const { email } = await User.findOne({ token }).lean(true);
      return email ? email : null;
    },
  },

  Mutation: {
    async createTask(_, { name, token }) {
      const { _id: user } = await User.findOne({ token }).lean({ token });
      const newTask = await Task.create({ name, user });
      const result = await Task.findById(newTask._id).populate("user");
      return result;
    },
    async deleteTask(_, { id, token }) {
      const { _id: user } = await User.findOne({ token }).lean({ token });
      const removedTask = await Task.findOneAndRemove({
        user,
        _id: id,
      }).populate("user");
      return removedTask;
    },
    async updateTask(_, { id, token }) {
      const { _id: user } = await User.findOne({ token }).lean({ token });
      const updatedTask = await Task.findOneAndUpdate(
        { _id: id, user },
        { done: true },
        { new: true }
      ).populate("user");
      return updatedTask;
    },
    async register(_, { email, password }) {
      const authentication = generateAuthentication(password);
      const newUser = await User.create({ ...authentication, email });
      return newUser;
    },
  },
};
