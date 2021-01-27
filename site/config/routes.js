/**
 * Route definitions here are same as under "/pages/", so keep these up-to-date.
 * @type {{node: string, search: string, index: string}}
 */
const routes = {
  index: '/[langcode]',
  node: '/[langcode]/[...node]',
}

export default routes
