import * as numberModule from '../src/number'
import * as orThrowModule from '../src/orThrow'
import numberOrThrow from '../src/numberOrThrow'

jest.spyOn(numberModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.numberOrThrow()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('calls the appropriate functions', () => {
    process.env[key] = '1'
    numberOrThrow(key)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(numberModule.default).toHaveBeenCalledWith(key)
  })

  it('reads "0" as 0', () => {
    process.env[key] = '0'
    expect(numberOrThrow(key)).toBe(0)
  })

  it('throws an error if a key is not defined', () => {
    expect(() => numberOrThrow('undefined')).toThrow()
  })
})
