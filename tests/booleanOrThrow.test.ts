import * as booleanModule from '../src/boolean'
import * as orThrowModule from '../src/orThrow'
import booleanOrThrow from '../src/booleanOrThrow'

jest.spyOn(booleanModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.booleanOrThrow()', () => {
  const key = 'foo'

  it('calls the appropriate functions', () => {
    process.env[key] = 'true'
    booleanOrThrow(key)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(booleanModule.default).toHaveBeenCalledWith(key)
  })

  it('reads "true" as true', () => {
    process.env[key] = 'true'
    expect(booleanOrThrow(key)).toBe(true)
  })

  it('reads "1" as true', () => {
    process.env[key] = '1'
    expect(booleanOrThrow(key)).toBe(true)
  })

  it('reads "false" as false', () => {
    process.env[key] = 'false'
    expect(booleanOrThrow(key)).toBe(false)
  })

  it('reads "0" as false', () => {
    process.env[key] = '0'
    expect(booleanOrThrow(key)).toBe(false)
  })

  it('throws an error if a key is not defined', () => {
    expect(() => booleanOrThrow('undefined')).toThrow()
  })
})
