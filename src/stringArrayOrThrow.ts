import stringArray from './stringArray'
import orThrow from './orThrow'

export default (key: string, separator?: string) =>
  orThrow((k) => stringArray(k, separator), 'string array')(key)
