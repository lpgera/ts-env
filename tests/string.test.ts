import string from '../src/string.js'

describe('string()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads a string value', () => {
    const value = 'bar'
    process.env[key] = value
    expect(string(key)).toEqual(value)
  })

  it('returns undefined if a key is not defined', () => {
    expect(string(key)).toBeUndefined()
  })
})
