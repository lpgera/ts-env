import boolean from './boolean'
import orThrow from './orThrow'

export default (key: string) => orThrow(boolean, 'boolean')(key)
