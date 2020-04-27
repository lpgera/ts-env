import * as stringModule from '../src/string'
import * as orThrowModule from '../src/orThrow'
import stringOrThrow from '../src/stringOrThrow'

jest.spyOn(stringModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.stringOrThrow()', () => {
  it('does something', () => {
    process.env.foo = 'bar'
    stringOrThrow('foo')
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(stringModule.default).toHaveBeenCalled()
  })
})
