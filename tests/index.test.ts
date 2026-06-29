import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import tsEnv from '../index.ts'

describe('tsEnv', () => {
  it('has .string() defined', () => {
    assert.strictEqual(typeof tsEnv.string, 'function')
  })

  it('has .stringOrThrow() defined', () => {
    assert.strictEqual(typeof tsEnv.stringOrThrow, 'function')
  })

  it('has .boolean() defined', () => {
    assert.strictEqual(typeof tsEnv.boolean, 'function')
  })

  it('has .booleanOrThrow() defined', () => {
    assert.strictEqual(typeof tsEnv.booleanOrThrow, 'function')
  })

  it('has .number() defined', () => {
    assert.strictEqual(typeof tsEnv.number, 'function')
  })

  it('has .numberOrThrow() defined', () => {
    assert.strictEqual(typeof tsEnv.numberOrThrow, 'function')
  })

  it('has .stringArray() defined', () => {
    assert.strictEqual(typeof tsEnv.stringArray, 'function')
  })

  it('has .stringArrayOrThrow() defined', () => {
    assert.strictEqual(typeof tsEnv.stringArrayOrThrow, 'function')
  })

  it('has .numberArray() defined', () => {
    assert.strictEqual(typeof tsEnv.numberArray, 'function')
  })

  it('has .numberArrayOrThrow() defined', () => {
    assert.strictEqual(typeof tsEnv.numberArrayOrThrow, 'function')
  })
})
