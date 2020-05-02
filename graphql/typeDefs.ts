import { gql } from "apollo-server";

export default gql`
  type Task {
    done: Boolean
    name: String
  }

  type Query {
    tasks: [Task]
  }
`;
