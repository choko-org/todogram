import database, { Schema } from './database'
import { TodoList } from './models'

const { ObjectId } = Schema.Types

export const getTodoListById = id => TodoList.findById(id)
export const getTodoLists = () => TodoList.find()

export const addTodoList = list => {
  const newTodo = new TodoList(list).save().catch(e => console.log(e))
  return newTodo
}
