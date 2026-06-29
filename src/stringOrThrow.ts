import string from './string.ts'
import orThrow from './orThrow.ts'

export default (key: string) => orThrow(string, 'string')(key)
