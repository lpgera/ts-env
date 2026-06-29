import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import stringArray from '../src/stringArray.ts'

describe('stringArray()', () => {
  const key = 'foo'
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
    }
  })

  it('reads a comma separated array', () => {
    process.env[key] = '0,1,2,foo bar'
    assert.deepStrictEqual(stringArray(key), ['0', '1', '2', 'foo bar'])
  })

  it('reads a space separated array', () => {
    const separator = ' '
    process.env[key] = '0 1 2 foo bar'
    assert.deepStrictEqual(stringArray(key, separator), ['0', '1', '2', 'foo', 'bar'])
  })

  it('returns undefined if a key is not defined', () => {
    assert.strictEqual(stringArray(key), undefined)
  })
})
