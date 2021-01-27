import { useQuery } from '@apollo/client'

import { SETTINGS_QUERY } from './queries'

export default (options) => useQuery(SETTINGS_QUERY, options)
