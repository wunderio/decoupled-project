const { contentByPathTypeDefs } = require('./contentByPathTypeDefs')
const { settings } = require('./settings')
const { menu } = require('./menu')

const allType = [ contentByPathTypeDefs, settings, menu ]

module.exports = {
  allType,
}
