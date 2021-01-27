import { useQuery } from '@apollo/client'

import { CONTENT_QUERY } from './query'

export default (options) => useQuery(CONTENT_QUERY, options)
