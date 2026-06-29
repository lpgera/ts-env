import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import stringOrThrow from '../src/stringOrThrow.ts'

describe('.stringOrThrow()', () => {
  const key = 'foo'

  it.skip('calls the appropriate functions', () => {
    // needs module mocking to implement
  })

  it('reads a string value', () => {
    const value = 'bar'
    process.env[key] = value
    assert.strictEqual(stringOrThrow(key), value)
  })

  it('throws an error if a key is empty', () => {
    process.env[key] = ''
    assert.throws(() => stringOrThrow(key))
  })

  it('throws an error if a key is not defined', () => {
    assert.throws(() => stringOrThrow('undefined'))
  })
})
