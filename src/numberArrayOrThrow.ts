import numberArray from './numberArray'
import orThrow from './orThrow'

export default (key: string, separator?: string) =>
  orThrow((k) => numberArray(k, separator), 'number array')(key)
