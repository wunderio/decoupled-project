const { gql } = require('apollo-server')

const menu = gql`
  # A type that describes site Menu
  type Menu {
    id: ID!
    menu_tree: [MenuItem]
  }

  type MenuItem {
    id: ID!
    title: String
    url: String
  }
`
module.exports = {
  menu,
}
