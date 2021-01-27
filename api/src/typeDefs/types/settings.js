const { gql } = require('apollo-server')

const settings = gql`
  # A type that describes site Settings
  type Settings {
    id: ID!
    langcode: String
    front_page: String
    menus: [MenuSetting]
  }

  type MenuSetting {
    menu_id: String
    type: String
  }
`
module.exports = {
  settings,
}
