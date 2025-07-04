import number from './number.js'
import orThrow from './orThrow.js'

export default (key: string) => orThrow(number, 'number')(key)
