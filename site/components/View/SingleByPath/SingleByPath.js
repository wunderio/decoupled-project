/**
 * @module SingleByPath
 */
import React from 'react'
import PropTypes from 'prop-types'

import useContentQuery from './useContentQuery'
import Entity from '../../Entity'

/**
 * A SingleByPath component chooses the presentational component
 * based on schema type.
 *
 * @alias module:SingleByPath
 * @param {object} location - For the getting the pathname
 * @param {string} langcode - Language
 * @param {object} options - Options
 */
const SingleByPath = ({ path, langcode, options }) => {
  const queryOptions = {
    variables: {
      path,
      langcode,
    },
  }

  const { loading, error, data } = useContentQuery(queryOptions)

  try {
    if (loading) return null
    if (error) {
      throw new Error()
    }
    if (!data || !data.contentByPath) {
      return null
    }
    return <Entity content={data.contentByPath} options={options} />
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Error: Site content not found', langcode)
  }
  return null
}

SingleByPath.propTypes = {
  path: PropTypes.string.isRequired,
  langcode: PropTypes.string.isRequired,
  options: PropTypes.object,
}

export default SingleByPath
