import Task from "../models/Task";

export default {
  Query: {
    // tasks: () => tasks,
  },
  Mutation: {
    createTask(_, args) {
      return Task.create({ name: args.name });
    },
  },
};
