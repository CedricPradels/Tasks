const tasks = [
  {
    done: false,
    name: "Faire les courses",
  },
  {
    done: true,
    name: "Faire la vaisselle",
  },
];

export default {
  Query: {
    tasks: () => tasks,
  },
};
