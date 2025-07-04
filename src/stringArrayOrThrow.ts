import stringArray from './stringArray.js'
import orThrow from './orThrow.js'

export default (key: string, separator?: string) =>
  orThrow((k) => stringArray(k, separator), 'string array')(key)
