import stringArray from '../src/stringArray.js'

describe('stringArray()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads a comma separated array', () => {
    process.env[key] = '0,1,2,foo bar'
    expect(stringArray(key)).toEqual(['0', '1', '2', 'foo bar'])
  })

  it('reads a space separated array', () => {
    const separator = ' '
    process.env[key] = '0 1 2 foo bar'
    expect(stringArray(key, separator)).toEqual(['0', '1', '2', 'foo', 'bar'])
  })

  it('returns undefined if a key is not defined', () => {
    expect(stringArray(key)).toBeUndefined()
  })
})
