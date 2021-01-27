import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

// Instantiate required constructor fields
const cache = new InMemoryCache()
const link = createHttpLink({
  uri: process.env.GRAPHQL_API_BASE_URL,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headerx
})

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
  ssr: false,
  // Provide some optional constructor fields
  name: 'nextjs-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

export default client
