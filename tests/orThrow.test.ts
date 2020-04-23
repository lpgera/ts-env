import orThrow from '../lib/orThrow'

describe('orThrow()', () => {
  it('calls the readFunction', () => {
    const key = 'foo'
    const value = 'bar'
    const readFunction = jest.fn().mockReturnValue(value)
    orThrow(readFunction)(key)
    expect(readFunction).toHaveBeenCalledWith(key)
  })

  it(`returns the return value of readFunction if it's defined`, () => {
    const key = 'foo'
    const value = 'bar'
    const readFunction = jest.fn().mockReturnValue(value)
    const returnValue = orThrow(readFunction)(key)
    expect(returnValue).toEqual(value)
  })

  it(`throws if the return value of readFunction is undefined`, () => {
    const key = 'foo'
    const readFunction = jest.fn().mockReturnValue(undefined)
    expect(() => orThrow(readFunction)(key)).toThrow()
  })
})
