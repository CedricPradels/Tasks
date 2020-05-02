import { ApolloServer, gql } from "apollo-server";

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

const typeDefs = gql`
  type Task {
    done: Boolean
    name: String
  }

  type Query {
    tasks: [Task]
  }
`;

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => console.log("server ready at ", url));
