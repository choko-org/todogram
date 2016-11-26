import { getPostsByUserSlug } from './connectors'

const resolverMap = {
  RootQuery: {
    todoList(root, args, context) {
      const { userSlug } = args
      return []
    }
  }
}

export default resolverMap
