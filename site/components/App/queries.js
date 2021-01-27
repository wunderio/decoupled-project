import { gql } from '@apollo/client'

export const SETTINGS_QUERY = gql`
  query settigs($langcode: String!, $siteUrl: String!) {
    settings(langcode: $langcode, siteUrl: $siteUrl) {
      id
      langcode
      front_page
    }
  }
`
