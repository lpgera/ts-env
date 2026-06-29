import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import orThrow from '../src/orThrow.ts'

describe('orThrow()', () => {
  it('calls the readFunction', (t) => {
    const key = 'foo'
    const value = 'bar'
    const readFunction = t.mock.fn(() => value)
    orThrow(readFunction, 'typeString')(key)
    assert.strictEqual(readFunction.mock.calls.at(0)?.arguments?.at(0), key)
  })

  it(`returns the return value of readFunction if it's defined`, () => {
    const key = 'foo'
    const value = 'bar'
    const readFunction = () => value
    const returnValue = orThrow(readFunction, 'typeString')(key)
    assert.strictEqual(returnValue, value)
  })

  it(`throws if the return value of readFunction is undefined`, () => {
    const key = 'foo'
    const readFunction = () => undefined
    assert.throws(
      () => orThrow(readFunction, 'typeString')(key),
      new Error(`Couldn't read typeString value from process.env.${key}`)
    )
  })
})
