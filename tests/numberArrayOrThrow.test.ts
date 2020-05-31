import * as numberArrayModule from '../src/numberArray'
import * as orThrowModule from '../src/orThrow'
import numberArrayOrThrow from '../src/numberArrayOrThrow'

jest.spyOn(numberArrayModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.numberArrayOrThrow()', () => {
  it('does something', () => {
    process.env.foo = '0,1,2'
    numberArrayOrThrow('foo')
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(numberArrayModule.default).toHaveBeenCalled()
  })
})
