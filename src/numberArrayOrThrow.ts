import numberArray from './numberArray.js'
import orThrow from './orThrow.js'

export default (key: string, separator?: string) =>
  orThrow((k) => numberArray(k, separator), 'number array')(key)
