import { gql } from '@apollo/client'

import Entity from '../../Entity'

export const CONTENT_QUERY = gql`
  query ContentByPath($path: String!, $langcode: String!) {
    contentByPath(path: $path, langcode: $langcode) {
      id
      type
      ... on Page {
        ...PageFullFragmentProxy
      }
    }
  }
  ${Entity.fragment.page.full}
`
