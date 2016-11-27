import 'babel-polyfill'
import mongoose from 'mongoose'

const {
  MONGODB_URI,
  MONGOHQ_URL,
} = process.env

// Install custom promise library (http://mongoosejs.com/docs/promises.html#plugging-in-your-own-promises-library)
mongoose.Promise = global.Promise

const connection = mongoose.createConnection(MONGODB_URI || MONGOHQ_URL || 'mongodb://database-host/todogram')

export { Schema } from 'mongoose'
export default connection
