import React from 'react'
import PropTypes from 'prop-types'
import { useRouter} from 'next/router'

import App from '../components/App'
import config from '../config/config'
import { isValidLangCode } from '../config/helper'
/**
 * Query
 */
import useSettingsQuery from '../components/App/useSettingsQuery'

/**
 * Front page
 * @param langcode
 * @returns {*}
 * @constructor
 */
const Index = (props) => {
  const router = useRouter()
  const { query } = router
  const { defaultLangCode } = config

  const langcode = isValidLangCode(query.langcode)
    ? query.langcode
    : defaultLangCode

    /**
   * Query site settings
   */
  let siteUrl = null

  if (typeof window !== "undefined") {
    // browser code
    siteUrl = window ? window.location.href : null

  }

  const { loading, error, data } = useSettingsQuery({
    variables: { langcode, siteUrl },
  })
  if (loading) return null
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error: Site settings has error', error)
    return null
  }

  if (!data || !data.settings) {
    // eslint-disable-next-line no-console
    console.error('Error: Site settings not found', langcode)
    return null
  }
  const { settings } = data
  
    return(
      <>
        <App settings={settings} frontPage langcode={langcode} />
      </>
    )
}

Index.getInitialProps = async () => ({
  langcode: config.defaultLangCode,
})



export default Index
