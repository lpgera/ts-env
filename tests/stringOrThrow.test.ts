import * as stringModule from '../src/string'
import * as orThrowModule from '../src/orThrow'
import stringOrThrow from '../src/stringOrThrow'

jest.spyOn(stringModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.stringOrThrow()', () => {
  const key = 'foo'

  it('calls the appropriate functions', () => {
    process.env[key] = 'bar'
    stringOrThrow(key)
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(stringModule.default).toHaveBeenCalledWith(key)
  })

  it('reads a string value', () => {
    const value = 'bar'
    process.env[key] = value
    expect(stringOrThrow(key)).toEqual(value)
  })

  it('throws an error if a key is empty', () => {
    process.env[key] = ''
    expect(() => stringOrThrow(key)).toThrow()
  })

  it('throws an error if a key is not defined', () => {
    expect(() => stringOrThrow('undefined')).toThrow()
  })
})
