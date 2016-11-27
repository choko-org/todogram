import database, { Schema } from './database'

const { ObjectId } = Schema.Types

// Smart _id retrieval for virtual field.
const idGetter = function () {
  return this._id
}

const UserSchema = new Schema({
  name: String,
})

UserSchema.virtual('id').get(idGetter)

const User = database.model('User', UserSchema);

/*
 * Todo Item.
 */
const TodoItemSchema = new Schema({
  text: String,
  completed: Boolean,
  created: String,
  modified: String,
})

TodoItemSchema.virtual('id').get(idGetter)

const TodoItem = database.model('TodoItem', TodoItemSchema);

/*
 * Todo List.
 */

const TodoListSchema = new Schema({
  text: String,
  author: UserSchema,
  items: [TodoItemSchema],
  coverImage: String,
  created: String,
  modified: String,
})

TodoListSchema.virtual('id').get(idGetter)

const TodoList = database.model('TodoList', TodoListSchema);

export {
  User,
  TodoItem,
  TodoList
}
