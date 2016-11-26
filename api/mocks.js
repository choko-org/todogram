import casual from 'casual'
import { MockList } from 'graphql-tools'

export default {
  String: () => casual.string,
  User: () => ({
    name: casual.name,
  }),
  TodoItem: () => ({
    text: casual.text,
    completed: casual.boolean,
  }),
  TodoList: () => ({
    text: casual.text,
    author: casual.name,
  }),
  RootQuery: () => ({
    todoList: (o, { id, numPages=1 }) => new MockList(numPages * 10)
  })
}
