import * as stringModule from '../src/string'
import * as orThrowModule from '../src/orThrow'
import stringOrThrow from '../src/stringOrThrow'

jest.spyOn(stringModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.stringOrThrow()', () => {
  it('calls the appropriate functions', () => {
    const key = 'foo'
    process.env[key] = 'bar'
    stringOrThrow(key)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(stringModule.default).toHaveBeenCalledWith(key)
  })
})
