import config from './config'
/**
 * Check if langcode is valid.
 *
 * @param langcode
 * @returns {boolean}
 */
export const isValidLangCode = (langcode) => {
  const { languages } = config
  const results = languages.find((language) => language.langcode === langcode)
  return !!results
}
