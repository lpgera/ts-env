import tsEnv from '../index'

describe('tsEnv', () => {
  it('has .string() defined', () => {
    expect(tsEnv.string).toEqual(expect.any(Function))
  })

  it('has .stringOrThrow() defined', () => {
    expect(tsEnv.stringOrThrow).toEqual(expect.any(Function))
  })

  it('has .boolean() defined', () => {
    expect(tsEnv.boolean).toEqual(expect.any(Function))
  })

  it('has .booleanOrThrow() defined', () => {
    expect(tsEnv.booleanOrThrow).toEqual(expect.any(Function))
  })

  it('has .number() defined', () => {
    expect(tsEnv.number).toEqual(expect.any(Function))
  })

  it('has .numberOrThrow() defined', () => {
    expect(tsEnv.numberOrThrow).toEqual(expect.any(Function))
  })
})
