const { gql } = require('apollo-server')

const query = gql`
  type Query {
    contentByPath(path: String!, langcode: String): Entity
    settings(langcode: String siteUrl: String): Settings
    menu(langcode: String): Menu
  }
`

module.exports = {
  query,
}
