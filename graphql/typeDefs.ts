import { gql } from "apollo-server";

export default gql`
  # OBJECT TYPES
  "Type of tasks"
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

  type Signin {
    isLogged: Boolean
    token: String
  }

  # QUERY TYPES
  type Query {
    doneTasks: [Task]
    todoTasks: [Task]
    signin(email: String, password: String): Signin
  }

  # MUTATION TYPES
  type Mutation {
    createTask(name: String): Task
    deleteTask(id: ID): Task
    updateTask(id: ID): Task
    signup(email: String, password: String): User
  }
`;
