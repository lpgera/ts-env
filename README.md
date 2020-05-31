# ts-env

An environment variable reader for TypeScript. Simple and minimal. ✨

[![npm package](https://img.shields.io/npm/v/@lpgera/ts-env.svg)](https://www.npmjs.com/package/@lpgera/ts-env)
[![Actions Status](https://img.shields.io/github/workflow/status/lpgera/ts-env/Tests.svg)](https://github.com/lpgera/ts-env/actions)
[![Coverage Status](https://coveralls.io/repos/github/lpgera/ts-env/badge.svg?branch=master)](https://coveralls.io/github/lpgera/ts-env?branch=master)
[![Dependencies](https://img.shields.io/david/lpgera/ts-env.svg)](https://github.com/lpgera/ts-env)
[![Size](https://img.shields.io/bundlephobia/minzip/@lpgera/ts-env.svg)](https://bundlephobia.com/result?p=@lpgera/ts-env)
[![License](https://img.shields.io/npm/l/@lpgera/ts-env.svg)](https://www.npmjs.com/package/@lpgera/ts-env)

## Install

This package requires `typescript` to be installed.

```bash
# with npm
npm install @lpgera/ts-env

# or with Yarn
yarn add @lpgera/ts-env
```

## Example

Reading different types of environment variables without `ts-env`:

```typescript
if (!process.env.PORT) {
  throw new Error('process.env.PORT is missing')
}
if (!process.env.DATABASE) {
  throw new Error('process.env.DATABASE is missing')
}

const port: number = parseInt(process.env.PORT)
const database: string = process.env.DATABASE
const debug: boolean | undefined = process.env.DEBUG === 'true'
```

Doing the same with `ts-env`:

```typescript
import tsEnv from '@lpgera/ts-env'

const port: number = tsEnv.numberOrThrow('PORT')
const database: string = tsEnv.stringOrThrow('DATABASE')
const debug: boolean | undefined = tsEnv.boolean('DEBUG')
```

## API

### .string(key: string): string | undefined

Reads a string value from `process.env[key]`.

### .stringOrThrow(key: string): string

Reads a string value from `process.env[key]`.
Throws an error if it's `undefined`.

### .boolean(key: string): boolean | undefined

Reads a boolean value from `process.env[key]`.
"0" and "false" are considered `false`, "1" and "true" are considered `true`.
Everything else will be read as `undefined`.

### .booleanOrThrow(key: string): boolean

Reads a boolean value from `process.env[key]`.
"0" and "false" are considered `false`, "1" and "true" are considered `true`.
Everything else will result in an error thrown.

### .number(key: string): number | undefined

Reads a number value from `process.env[key]`.
If a number cannot be parsed, it will return `undefined`.

### .numberOrThrow(key: string): number

Reads a number value from `process.env[key]`.
If a number cannot be parsed, an error will be thrown.

### .stringArray(key: string, separator: string = ','): string[] | undefined

Reads a string array from `process.env[key]`.

### .stringArrayOrThrow(key: string, separator: string = ','): string[]

Reads a string array from `process.env[key]`.
Throws an error if it's `undefined`.

### .numberArray(key: string, separator: string = ','): number[] | undefined

Reads a number array from `process.env[key]`.
If any item cannot be parsed, it will return `undefined`.

### .numberArrayOrThrow(key: string, separator: string = ','): number[]

Reads a number array from `process.env[key]`.
If any item cannot be parsed, an error will be thrown.
