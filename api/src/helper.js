// const contentByPathMock = require('./mockData/contentByPath.mock')

const helper = {
  hasHits: (hits) => hits.length > 0 && typeof hits[0]._source !== 'undefined',
  getFirstSource: (response) => {
    const { hits } = response.body.hits

    return helper.hasHits(hits) ? hits[0]._source : null
  },
  getAllSourcesWithTotal: (response) => {
    const { hits, total } = response.hits
    if (helper.hasHits(hits)) {
      return {
        total,
        hits: hits.map((value) => value._source),
      }
    }

    return {
      total: 0,
      hits: [],
    }
  },
}

module.exports = helper
