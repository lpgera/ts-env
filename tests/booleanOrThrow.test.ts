import * as booleanModule from '../src/boolean'
import * as orThrowModule from '../src/orThrow'
import booleanOrThrow from '../src/booleanOrThrow'

jest.spyOn(booleanModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.booleanOrThrow()', () => {
  it('calls the appropriate functions', () => {
    const key = 'foo'
    process.env[key] = 'true'
    booleanOrThrow(key)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(booleanModule.default).toHaveBeenCalledWith(key)
  })
})
