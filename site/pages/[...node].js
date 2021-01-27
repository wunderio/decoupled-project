import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import App from '../components/App'
import config from '../config/config'
import { isValidLangCode } from '../config/helper'

/**
 * Inner Node
 * @param path
 * @param langcode
 * @returns {*}
 * @constructor
*/
const Node = () => {
    const router = useRouter()
    const { query } = router
    const { defaultLangCode } = config
    const langcode = isValidLangCode(query.langcode)
      ? query.langcode
      : defaultLangCode

    return (
      <>
        <App path={"/"+langcode+router.asPath} langcode={langcode} />
      </>
    )
    
}

// Node.getInitialProps = async ({ asPath: path, query }) => ({
//   ...query,
//   path,
//   langcode: config.defaultLangCode,
// })

export default Node
