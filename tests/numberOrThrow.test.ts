import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import numberOrThrow from '../src/numberOrThrow.ts'

describe('.numberOrThrow()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it.skip('calls the appropriate functions', () => {
    // needs module mocking to implement
  })

  it('reads "0" as 0', () => {
    process.env[key] = '0'
    assert.strictEqual(numberOrThrow(key), 0)
  })

  it('throws an error if a key is not defined', () => {
    assert.throws(() => numberOrThrow('undefined'))
  })
})
