import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import number from '../src/number.ts'

describe('number()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads "0" as 0', () => {
    process.env[key] = '0'
    assert.strictEqual(number(key), 0)
  })

  it('reads "1" as 1', () => {
    process.env[key] = '1'
    assert.strictEqual(number(key), 1)
  })

  it('reads "-1" as -1', () => {
    process.env[key] = '-1'
    assert.strictEqual(number(key), -1)
  })

  it('reads "0.1" as 0.1', () => {
    process.env[key] = '0.1'
    assert.strictEqual(number(key), 0.1)
  })

  it('reads "string" as undefined', () => {
    process.env[key] = 'string'
    assert.strictEqual(number(key), undefined)
  })

  it('returns undefined if a key is not defined', () => {
    assert.strictEqual(number(key), undefined)
  })
})
