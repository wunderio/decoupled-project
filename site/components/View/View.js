/**
 * @module View
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Views
 */
import NoResult from '../General/NoResult'
import SingleByPath from './SingleByPath'

/**
 * A View component chooses the presentational component
 * based on viewType property inside of options object.
 *
 * @alias module:View
 */
const View = props => {
  const { options: { viewType } = {} } = props
  const views = {
    SingleByPath,
    NoResult,
  }
  const Component = views[viewType] ? views[viewType] : views.NoResult
  return <Component {...props} />
}

View.propTypes = {
  langcode: PropTypes.string.isRequired,
  options: PropTypes.object,
}

export default View
