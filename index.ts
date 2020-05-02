import { ApolloServer } from "apollo-server";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("DB connected"));

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => console.log("server ready at ", url));
