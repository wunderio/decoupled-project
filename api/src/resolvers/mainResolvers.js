const { Client } = require('@elastic/elasticsearch')

const helper = require('../helper')

const client = new Client({
  node: process.env.ELASTICSEARCH_HOST ? process.env.ELASTICSEARCH_HOST: 'http://localhost:9400',
  headers: {  'Content-Type': 'application/json' }
})

const mocksEnabled = false

const mainResolvers = {
  //content type
  Entity: {
    __resolveType(obj, context, info) {
      const type = {
        page: 'Page',
      }

      if (obj.hasOwnProperty('type')) {
        return type[obj.type] ? type[obj.type] : 'Page'
      }

      return 'Page'
    },
  },

  // Referece in typedefs
  Element: {
    __resolveType(obj, context, info) {
      const type = {
        component_content_text: 'Text'
      }
      return type[obj.type] ? type[obj.type] : 'NoResult'
    },
  },
  Query: {
    contentByPath: async (root, { path, langcode = 'en' }) => {
      // if (mocksEnabled) return helper.contentByPathMock(path)
      try {
        const response = await client.search({
          index: `page_index_${langcode}`,
          type: '_doc',
          body: {
            query: {
              bool: {
                must: [ { term: { path } }, { term: { status: true } } ],
              },
            },
          },
        })
        return helper.getFirstSource(response)
      } catch (error) {
        /* eslint-disable no-console */
        console.trace(error)
      }
      return null
    },
    settings: async (root, { langcode = 'en', siteUrl = "https://localhost" }) => {
      // if (mocksEnabled) return helper.settingsMock()
      // Query footer index
      try {
        const response = await client.search({
          index: `site_index_${langcode}`,
          type: '_doc',
          body: {
            query: {
              term: { url: siteUrl },
            },
          },
        })
        
        return helper.getFirstSource(response)
      } catch (error) {
        /* eslint-disable no-console */
        console.trace(error)
      }
      return null
    },
    menu: async (root, { langcode = 'en' }) => {
      if (mocksEnabled) return helper.menuMock()

      // Query content index
      try {
        const response = await client.search({
          index: `menu_index_${langcode}`,
          type: '_doc',
          body: {
            query: {
              term: { id: 'main' },
            },
          },
        })

        return helper.getFirstSource(response)
      } catch (error) {
        /* eslint-disable no-console */
        console.trace(error)
      }
      return null
    },
  },
}
module.exports = {
  mainResolvers,
}
