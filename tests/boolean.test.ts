import boolean from '../lib/boolean'

describe('boolean()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads "true" as true', () => {
    process.env[key] = 'true'
    expect(boolean(key)).toBe(true)
  })

  it('reads "1" as true', () => {
    process.env[key] = '1'
    expect(boolean(key)).toBe(true)
  })

  it('reads "false" as false', () => {
    process.env[key] = 'false'
    expect(boolean(key)).toBe(false)
  })

  it('reads "0" as false', () => {
    process.env[key] = '0'
    expect(boolean(key)).toBe(false)
  })

  it('returns undefined if a key is not defined', () => {
    expect(boolean(key)).toBeUndefined()
  })
})
