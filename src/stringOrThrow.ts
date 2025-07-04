import string from './string.js'
import orThrow from './orThrow.js'

export default (key: string) => orThrow(string, 'string')(key)
