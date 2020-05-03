import { gql } from "apollo-server";

export default gql`
  # OBJECT TYPES
  "Type of tasks"
  type Task {
    id: ID
    done: Boolean
    name: String
    user: User
  }

  type User {
    id: ID
    email: String
    token: String
  }

  # QUERY TYPES
  type Query {
    doneTasks(token: String): [Task]
    todoTasks(token: String): [Task]
    login(email: String, password: String): User
  }

  # MUTATION TYPES
  type Mutation {
    createTask(name: String, token: String): Task
    deleteTask(id: ID, token: String): Task
    updateTask(id: ID, token: String): Task
    register(email: String, password: String): User
  }
`;
