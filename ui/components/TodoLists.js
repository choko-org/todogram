import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const TodoLists = ({ items }) => {
  return (
    <Card.Group>
      { items.map((item, key) => (
        <Card key={ key }>
          <Card.Content>
            <Card.Header>{ item.text }</Card.Header>
          </Card.Content>
        </Card>
      )) }
    </Card.Group>
  )
}

export default TodoLists
