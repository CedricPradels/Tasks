import { gql } from "apollo-server";

export default gql`
  # OBJECT TYPES
  type Task {
    id: ID
    done: Boolean
    name: String
  }

  type User {
    id: ID
    email: String
    token: String
  }

  # QUERY TYPES
  type Query {
    tasks: [Task]
  }

  # MUTATION TYPES
  type Mutation {
    createTask(name: String): Task
  }
`;
