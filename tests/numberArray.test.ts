import numberArray from '../src/numberArray.js'

describe('numberArray()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads a comma separated array', () => {
    process.env[key] = '0,1,2,-1.5'
    expect(numberArray(key)).toEqual([0, 1, 2, -1.5])
  })

  it('reads a space separated array', () => {
    const separator = ' '
    process.env[key] = '0 1 2 -1.5'
    expect(numberArray(key, separator)).toEqual([0, 1, 2, -1.5])
  })

  it('returns undefined if any item is not a number', () => {
    process.env[key] = '0,1,2,foo'
    expect(numberArray(key)).toBeUndefined()
  })

  it('returns undefined if a key is not defined', () => {
    expect(numberArray(key)).toBeUndefined()
  })
})
