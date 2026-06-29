import number from './number.ts'
import orThrow from './orThrow.ts'

export default (key: string) => orThrow(number, 'number')(key)
