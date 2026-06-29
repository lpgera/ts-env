import numberArray from './numberArray.ts'
import orThrow from './orThrow.ts'

export default (key: string, separator?: string) =>
  orThrow((k) => numberArray(k, separator), 'number array')(key)
