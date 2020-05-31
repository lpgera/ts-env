import * as numberModule from '../src/number'
import * as orThrowModule from '../src/orThrow'
import numberOrThrow from '../src/numberOrThrow'

jest.spyOn(numberModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.numberOrThrow()', () => {
  it('calls the appropriate functions', () => {
    const key = 'foo'
    process.env[key] = '1'
    numberOrThrow(key)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(numberModule.default).toHaveBeenCalledWith(key)
  })
})
