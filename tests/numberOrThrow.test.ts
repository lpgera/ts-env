import * as numberModule from '../src/number'
import * as orThrowModule from '../src/orThrow'
import numberOrThrow from '../src/numberOrThrow'

jest.spyOn(numberModule, 'default')
jest.spyOn(orThrowModule, 'default')

describe('.numberOrThrow()', () => {
  it('does something', () => {
    process.env.foo = '1'
    numberOrThrow('foo')
    expect(orThrowModule.default).toHaveBeenCalled()
    expect(numberModule.default).toHaveBeenCalled()
  })
})
