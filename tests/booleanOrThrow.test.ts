import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import booleanOrThrow from '../src/booleanOrThrow.ts'

describe('.booleanOrThrow()', () => {
  const key = 'foo'

  it.skip('calls the appropriate functions', () => {
    // needs module mocking to implement
  })

  it('reads "true" as true', () => {
    process.env[key] = 'true'
    assert.strictEqual(booleanOrThrow(key), true)
  })

  it('reads "1" as true', () => {
    process.env[key] = '1'
    assert.strictEqual(booleanOrThrow(key), true)
  })

  it('reads "false" as false', () => {
    process.env[key] = 'false'
    assert.strictEqual(booleanOrThrow(key), false)
  })

  it('reads "0" as false', () => {
    process.env[key] = '0'
    assert.strictEqual(booleanOrThrow(key), false)
  })

  it('throws an error if a key is not defined', () => {
    assert.throws(() => booleanOrThrow('undefined'))
  })
})
