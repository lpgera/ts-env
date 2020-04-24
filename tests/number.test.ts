import number from '../src/number'

describe('number()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads "0" as 0', () => {
    process.env[key] = '0'
    expect(number(key)).toBe(0)
  })

  it('reads "1" as 1', () => {
    process.env[key] = '1'
    expect(number(key)).toBe(1)
  })

  it('reads "-1" as -1', () => {
    process.env[key] = '-1'
    expect(number(key)).toBe(-1)
  })

  it('reads "0.1" as 0.1', () => {
    process.env[key] = '0.1'
    expect(number(key)).toBe(0.1)
  })

  it('reads "string" as undefined', () => {
    process.env[key] = 'string'
    expect(number(key)).toBeUndefined()
  })

  it('returns undefined if a key is not defined', () => {
    expect(number(key)).toBeUndefined()
  })
})
