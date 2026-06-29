import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import numberArray from '../src/numberArray.ts'

describe('numberArray()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads a comma separated array', () => {
    process.env[key] = '0,1,2,-1.5'
    assert.deepStrictEqual(numberArray(key), [0, 1, 2, -1.5])
  })

  it('reads a space separated array', () => {
    const separator = ' '
    process.env[key] = '0 1 2 -1.5'
    assert.deepStrictEqual(numberArray(key, separator), [0, 1, 2, -1.5])
  })

  it('returns undefined if any item is not a number', () => {
    process.env[key] = '0,1,2,foo'
    assert.strictEqual(numberArray(key), undefined)
  })

  it('returns undefined if a key is not defined', () => {
    assert.strictEqual(numberArray(key), undefined)
  })
})
