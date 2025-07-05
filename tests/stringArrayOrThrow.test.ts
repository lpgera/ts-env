import * as stringArrayModule from '../src/stringArray.js'
import * as orThrowModule from '../src/orThrow.js'
import stringArrayOrThrow from '../src/stringArrayOrThrow.js'

jest.spyOn(stringArrayModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.stringArrayOrThrow()', () => {
  it('calls the appropriate functions', () => {
    const key = 'foo'
    const separator = ','
    process.env[key] = '0,1,2,foo bar'
    stringArrayOrThrow(key, separator)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(stringArrayModule.default).toHaveBeenCalledWith(key, separator)
  })
})
