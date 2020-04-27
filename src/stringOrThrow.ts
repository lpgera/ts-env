import string from './string'
import orThrow from './orThrow'

export default (key: string) => orThrow(string, 'string')(key)
