import * as numberArrayModule from '../src/numberArray.js'
import * as orThrowModule from '../src/orThrow.js'
import numberArrayOrThrow from '../src/numberArrayOrThrow.js'

jest.spyOn(numberArrayModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.numberArrayOrThrow()', () => {
  it('calls the appropriate functions', () => {
    const key = 'foo'
    const separator = ','
    process.env[key] = '0,1,2'
    numberArrayOrThrow(key, separator)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(numberArrayModule.default).toHaveBeenCalledWith(key, separator)
  })
})
