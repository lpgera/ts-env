import number from './number'
import orThrow from './orThrow'

export default (key: string) => orThrow(number, 'number')(key)
