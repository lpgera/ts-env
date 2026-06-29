import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import boolean from '../src/boolean.ts'

describe('boolean()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads "true" as true', () => {
    process.env[key] = 'true'
    assert.strictEqual(boolean(key), true)
  })

  it('reads "1" as true', () => {
    process.env[key] = '1'
    assert.strictEqual(boolean(key), true)
  })

  it('reads "false" as false', () => {
    process.env[key] = 'false'
    assert.strictEqual(boolean(key), false)
  })

  it('reads "0" as false', () => {
    process.env[key] = '0'
    assert.strictEqual(boolean(key), false)
  })

  it('returns undefined if a key is not defined', () => {
    assert.strictEqual(boolean(key), undefined)
  })
})
