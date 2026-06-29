import boolean from './boolean.ts'
import orThrow from './orThrow.ts'

export default (key: string) => orThrow(boolean, 'boolean')(key)
