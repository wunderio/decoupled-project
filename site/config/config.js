/**
 * Site configuration
 */
const languages = [
  {
    langcode: 'en',
    text: 'EN',
    url: '/en',
  },
  {
    langcode: 'fi',
    text: 'FI',
    url: '/fi',
  },
]

const defaultLangCode = languages[0].langcode

export default {
  languages,
  defaultLangCode,
}
