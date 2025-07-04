import boolean from './boolean.js'
import orThrow from './orThrow.js'

export default (key: string) => orThrow(boolean, 'boolean')(key)
