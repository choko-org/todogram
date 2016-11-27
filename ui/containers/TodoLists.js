import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import TodoLists from '../components/TodoLists'

const TodoListsQuery = gql`
  query TodoLists {
    todoLists {
      id
      text
    }
  }
`;

export default graphql(TodoListsQuery, {
  props: ({ data: { loading, todoLists } }) => {
    return { items: todoLists || [] }
  },
})(TodoLists)
