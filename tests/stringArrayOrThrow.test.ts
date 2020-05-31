import * as stringArrayModule from '../src/stringArray'
import * as orThrowModule from '../src/orThrow'
import stringArrayOrThrow from '../src/stringArrayOrThrow'

jest.spyOn(stringArrayModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.stringArrayOrThrow()', () => {
  it('does something', () => {
    process.env.foo = '0,1,2,foo bar'
    stringArrayOrThrow('foo')
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(stringArrayModule.default).toHaveBeenCalled()
  })
})
