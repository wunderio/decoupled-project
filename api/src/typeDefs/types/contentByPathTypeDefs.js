const { gql } = require('apollo-server')

const contentByPathTypeDefs = gql`
  # An interface that describes the ContentType
  interface Entity {
    id: ID!
    # langcode: String
    title: String
    path: String
    type: String
    created: String
    updated: String
    page_elements: [Element]
  }

  # An interface that describes the Element
  interface Element {
    id: ID!
    #langcode: String #obligati vjadzes priekš iekšošanas
    type: String
    content: Content
  }

  # An interface that describes the Basic entity
  type Page implements Entity {
    id: ID!
    langcode: String
    title: String
    path: String
    type: String
    created: String
    updated: String
    page_elements: [Element]
  }

  type Text implements Element {
    id: ID!
    type: String
    content: Content
  }

  # A type that describes the Wrapper
  type Wrapper implements Element {
    id: ID!
    # langcode: String
    type: String
    content: Content
  }

  # A type that describes the Grid
  type Grid implements Element {
    id: ID!
    # langcode: String
    type: String
    content: Content
  }

  # A type that describes the Content
  type Content {
    text: String
    title: String
    items: [Element]
  }
`
module.exports = {
  contentByPathTypeDefs,
}
