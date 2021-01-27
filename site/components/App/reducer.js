const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePage':
      return {
        ...state,
        ...action.values,
      }

    case 'updateMetadata':
      return {
        ...state,
        metadata: {
          raw: action.metadata,
          normalized: {
            title:
              action.metadata &&
              action.metadata.title &&
              action.metadata.title['#attributes'].content,
          },
        },
      }

    default:
      return state
  }
}

export default reducer
