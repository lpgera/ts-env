import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import string from '../src/string.ts'

describe('string()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads a string value', () => {
    const value = 'bar'
    process.env[key] = value
    assert.strictEqual(string(key), value)
  })

  it('returns undefined if a key is not defined', () => {
    assert.strictEqual(string(key), undefined)
  })
})
