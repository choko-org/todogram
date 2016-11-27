import { addTodoList, getTodoListById, getTodoLists } from './connectors'

const resolverMap = {
  RootQuery: {
    todoLists: (root, {}, context) => getTodoLists(),
    todoList: (root, { id }, context) => getTodoListById(id),
  },
  Mutation: {
    addTodoList: (root, { list }, context) => addTodoList(list),
  }
}

export default resolverMap
