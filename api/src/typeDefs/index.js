const { query } = require('./query')
const { allType } = require('./types')

const typeDefs = [ query, ...allType ]

module.exports = {
  typeDefs,
}
