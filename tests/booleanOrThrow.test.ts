import * as booleanModule from '../src/boolean'
import * as orThrowModule from '../src/orThrow'
import booleanOrThrow from '../src/booleanOrThrow'

jest.spyOn(booleanModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.booleanOrThrow()', () => {
  it('does something', () => {
    process.env.foo = 'true'
    booleanOrThrow('foo')
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(booleanModule.default).toHaveBeenCalled()
  })
})
