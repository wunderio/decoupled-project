import React from 'react'
import PropTypes from 'prop-types'

/**
 * Pages
 */
import Page from '../Page'

/**
 * Context
 */
import { StateProvider } from './Context'
import reducer from './reducer'



/**
 * App main entrypoint.
 *
 * @param {string} path
 * @param {string} langcode
 * @param {boolean} frontPage
 * @returns {*}
 */
const App = ({ path, langcode, frontPage = false , settings }) => {

  /**
   * Set initial data
   */
  const initialState = {
    langcode,
    settings: {
      langcode: 'lv',
      frontpage: {
        id: settings ? settings.id : null,
        path: settings ? settings.front_page : null,
      },
    },
  }

  const pageType = frontPage ? 'FrontPage' : 'SingleByPath'
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Page
        pageType={pageType}
        langcode={langcode}
        initialState={initialState}
        {...!frontPage && {
          path,
        }}
      />
    </StateProvider>
  )
}

App.propTypes = {
  path: PropTypes.string,
  langcode: PropTypes.string.isRequired,
  frontPage: PropTypes.bool,
}

export default App
