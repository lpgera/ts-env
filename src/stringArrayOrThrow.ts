import stringArray from './stringArray.ts'
import orThrow from './orThrow.ts'

export default (key: string, separator?: string) =>
  orThrow((k) => stringArray(k, separator), 'string array')(key)
